import express, { NextFunction, Request, Response } from 'express';
import logger from '../utils/logger';
import uploadDogProfileMW from '../middleware/upload-resource.middleware';

import {
    getDogByIdCtrl,
    filterDogFromQueryCtrl,
    updateDogCtrl,
    createNewDogCtrl,
    deleteDogByIdCtrl,
    getRacesListCtrl,
    uploadDogPictureCtrl,
} from '../controllers/dogs.controller';
import { isAuthenticatedMW } from '../middleware/auth.middleware';
import {
    validateOwnerMW,
    validateAndConvertQuery,
} from '../middleware/dogs.middleware';
import {
    uploadDogProfileLimiter,
    createDogLimiter,
    updateDogLimiter,
    deleteDogLimiter,
} from '../middleware/limitters.middlware';

const router = express.Router();

router.use(function (req: Request, res: Response, next: NextFunction) {
    logger.debug(req.id, 'call to API', {
        method: req.method,
        originalUrl: req.originalUrl,
        body: req.body,
    });
    next();
});

/**
 * @swagger
 * /dogs/races:
 *   get:
 *     tags: ['Dog CRUD operations']
 *     description: Get dogs distinct races list
 *     responses:
 *       200:
 *         description: Returns the races list data
 *         content:
 *           application/json:
 *               schema:
 *                   type: array
 *                   items:
 *                      type: string
 *                   example: ["race1", "race2", "race3", ...]
 *       500:
 *         description: Internal Server Error
 */
router.get('/races', getRacesListCtrl);

/**
 * @swagger
 * /dogs/{dogId}:
 *   get:
 *     tags: ['Dog CRUD operations']
 *     description: Get dog data by dogId
 *     parameters:
 *      - in: path
 *        name: dogId
 *        required: true
 *        type: string
 *        description: The dog's ID.
 *     responses:
 *       200:
 *         description: Return the dog doc data
 *         content:
 *           application/json:
 *               schema:
 *                  $ref: "#/components/schemas/dog"
 *       302:
 *         description: Unauthenticated user - redirect to login page
 */
router.get('/:dogId', getDogByIdCtrl);

/**
 * @swagger
 * /dogs/:
 *   get:
 *     tags: ['Dog CRUD operations']
 *     description: Get dogs list data by filtering with parameters
 *     parameters:
 *      - in: query
 *        name: page
 *        required: true
 *        schema:
 *          type: integer
 *          minimum: 1
 *        description: Get result from page number
 *      - in: query
 *        name: itemsPerPage
 *        required: true
 *        schema:
 *          type: integer
 *          minimum: 1
 *          maximum: 100
 *        description: Get result items of page the number
 *      - in: query
 *        name: status
 *        type: number
 *        enum: [0, 1]
 *        description: Filter by dog's status (0-free to adopt, 1-is taken)..
 *      - in: query
 *        name: gender
 *        type: string
 *        enum: ['F','M']
 *        description: Filter by dog's gender (F-female dog, M-male dog).
 *      - in: query
 *        name: race
 *        type: string
 *        description: Filter by dog's race.
 *      - in: query
 *        name: minAge
 *        schema:
 *          type: integer
 *          minimum: 1
 *          maximum: 20
 *        description: Filter by minimum dog's age
 *      - in: query
 *        name: maxAge
 *        schema:
 *          type: integer
 *          minimum: 1
 *          maximum: 20
 *        description: Filter by maximum dog's age
 *      - in: query
 *        name: name
 *        schema:
 *          type: string
 *        description: Filter by dog's name if it's includes this string
 *      - in: query
 *        name: sortByStatus
 *        type: integer
 *        enum: [-1, 1]
 *        description: Sort the result by status
 *      - in: query
 *        name: sortByGender
 *        type: integer
 *        enum: [-1, 1]
 *        description: Sort the result by gender
 *      - in: query
 *        name: sortByRace
 *        type: integer
 *        enum: [-1, 1]
 *        description: Sort the result by race
 *      - in: query
 *        name: sortByAge
 *        type: integer
 *        enum: [-1, 1]
 *        description: Sort the result by age
 *      - in: query
 *        name: sortByName
 *        type: integer
 *        enum: [-1, 1]
 *        description: Sort the result by name
 *      - in: query
 *        name: sortByLastUpdated
 *        type: integer
 *        enum: [-1, 1]
 *        description: Sort the result by last update date
 *     responses:
 *       200:
 *         description: Return the dog doc data
 *         content:
 *           application/json:
 *               schema:
 *                  type: object
 *                  properties:
 *                      pagination:
 *                          $ref: "#/components/schemas/pagination"
 *                      data:
 *                          type: array
 *                          items:
 *                             $ref: "#/components/schemas/dog"
 *       500:
 *         description: Internal Server Error
 */
router.get('/', validateAndConvertQuery, filterDogFromQueryCtrl);

/**
 * @swagger
 * /dogs/:
 *   post:
 *     tags: ['Dog CRUD operations']
 *     description: Create new dog with required data
 *     security:
 *        cookieAuth:
 *          - connect.sid
 *     requestBody:
 *        description: Create a new dog
 *        required: true
 *        content:
 *           application/json:
 *               schema:
 *                  $ref: "#/components/schemas/dog"
 *     responses:
 *       201:
 *         description: Return the dog doc data
 *         content:
 *           application/json:
 *               schema:
 *                  $ref: "#/components/schemas/dog"
 *       302:
 *         description: Unauthenticated user - redirect to login page
 *       500:
 *         description: Internal Server Error
 */
router.post('/', isAuthenticatedMW, createNewDogCtrl, createDogLimiter);

/**
 * @swagger
 * /dogs/profile/{dogId}:
 *   post:
 *     tags: ['Dog CRUD operations']
 *     description: Upload new image for a dog
 *     security:
 *        cookieAuth:
 *          - connect.sid
 *     parameters:
 *      - in: path
 *        name: dogId
 *        required: true
 *        type: string
 *        description: The dog's ID.
 *     requestBody:
 *        description: Upload new image of the dog
 *        required: true
 *        content:
 *           application/json:
 *              schema:
 *                  type: string
 *                  example: "http://photosOfDogsForFreeee/etc.../etc..."
 *     responses:
 *       200:
 *         description: Upload process failed
 *       500:
 *         description: Upload process success
 */
router.post(
    '/profile/:dogId',
    isAuthenticatedMW,
    validateOwnerMW,
    uploadDogProfileLimiter,
    uploadDogProfileMW,
    uploadDogPictureCtrl
);

/**
 * @swagger
 * /dogs/{dogId}:
 *   put:
 *     tags: ['Dog CRUD operations']
 *     description: Update dog data by dogId
 *     security:
 *        cookieAuth:
 *          - connect.sid
 *     parameters:
 *      - in: path
 *        name: dogId
 *        required: true
 *        type: string
 *        description: The dog's ID.
 *     requestBody:
 *        description: Update dog information
 *        required: true
 *        content:
 *           application/json:
 *               schema:
 *                  $ref: "#/components/schemas/dog"
 *     responses:
 *       206:
 *         description: Return the dog doc data
 *         content:
 *           application/json:
 *               schema:
 *                  $ref: "#/components/schemas/dog"
 *       500:
 *         description: Unauthorized user!
 */
router.put(
    '/:dogId',
    isAuthenticatedMW,
    validateOwnerMW,
    updateDogCtrl,
    updateDogLimiter
);

/**
 * @swagger
 * /dogs/{dogId}:
 *   delete:
 *     tags: ['Dog CRUD operations']
 *     description: Remove dog data by dogId
 *     security:
 *        cookieAuth:
 *          - connect.sid
 *     parameters:
 *      - in: path
 *        name: dogId
 *        required: true
 *        type: string
 *        description: The dog's ID.
 *     responses:
 *       200:
 *         description: Dog deleted successfully
 *       302:
 *         description: Unauthenticated user - redirect to login page
 *       500:
 *         description: Internal Server Error
 */
router.delete(
    '/:dogId',
    isAuthenticatedMW,
    validateOwnerMW,
    deleteDogByIdCtrl,
    deleteDogLimiter
);

export = router;
