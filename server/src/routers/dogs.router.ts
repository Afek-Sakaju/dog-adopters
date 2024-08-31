import express, { NextFunction, Request, Response } from 'express';

import logger from '../utils/logger';
import {
    getDogByIdCtrl,
    filterDogFromQueryCtrl,
    updateDogCtrl,
    createNewDogCtrl,
    deleteDogByIdCtrl,
    getRacesListCtrl,
    getDogIdsByOwnerCtrl,
    getApprovalForDogOwnershipCtrl,
} from '../controllers/dogs.controller';
import { isAuthenticatedMW } from '../middleware/auth.middleware';
import {
    validateOwnerMW,
    validateAndConvertQuery,
} from '../middleware/dogs.middleware';
import {
    createDogLimiter,
    updateDogLimiter,
    deleteDogLimiter,
} from '../middleware/limitters.middlware';

const router = express.Router();

router.use(function (req: Request, _res: Response, next: NextFunction) {
    logger.debug(req.id, 'call to API', {
        method: req.method,
        originalUrl: req.originalUrl,
        body: req.body,
    });
    next();
});

/**
 * @swagger
 * /dogs/breeds:
 *   get:
 *     tags: ['Dogs operations']
 *     description: Get a list of distinct dog breeds
 *     responses:
 *       200:
 *         description: Returns list of distinct dog breeds
 *         content:
 *           application/json:
 *               schema:
 *                   type: array
 *                   items:
 *                      type: string
 *                   example: ["Poodle", "Labrador", "Yorkie", "Shih Tzu"]
 *       500:
 *         description: Internal server error
 */
router.get('/breeds', getRacesListCtrl);

/**
 * @swagger
 * /user/{userId}/dogs/ids:
 *   get:
 *     tags: ['Dog operations']
 *     description: Get all dog IDs owned by a user
 *     security:
 *        cookieAuth:
 *          - connect.sid
 *     parameters:
 *      - in: path
 *        name: userId
 *        required: true
 *        type: string
 *        description: The user ID.
 *     responses:
 *       200:
 *         description: Return an array of dog IDs
 *       401:
 *         description: Unauthenticated user
 *       500:
 *         description: Internal server error
 */
router.get('/owner/:userId', isAuthenticatedMW, getDogIdsByOwnerCtrl);

/**
 * @swagger
 * /dogs/{dogId}:
 *   get:
 *     tags: ['Dogs operations']
 *     description: Get dog data by his ID
 *     parameters:
 *      - in: path
 *        name: dogId
 *        required: true
 *        type: string
 *        description: The dog's ID
 *     responses:
 *       200:
 *         description: Returns dog's data
 *         content:
 *           application/json:
 *               schema:
 *                  $ref: "#/components/schemas/dog"
 *       500:
 *         description: Internal server error
 */
router.get('/:dogId', getDogByIdCtrl);

/**
 * @swagger
 * /dogs/:
 *   get:
 *     tags: ['Dogs operations']
 *     description: Get dogs list data by filtering criteria
 *     parameters:
 *      - in: query
 *        name: page
 *        required: true
 *        schema:
 *          type: number
 *          minimum: 1
 *        description: Get filtered result from a specific page
 *      - in: query
 *        name: itemsPerPage
 *        required: true
 *        schema:
 *          type: number
 *          minimum: 1
 *          maximum: 100
 *        description: Adjust data results amount inside the page
 *      - in: query
 *        name: status
 *        type: number
 *        enum: [0, 1]
 *        description: Filter by dog's adoption status (Looking for adoption-0 / Adopted-1)
 *      - in: query
 *        name: gender
 *        type: string
 *        enum: ['F','M']
 *        description: Filter by dog's gender (Male-M / Female-F)
 *      - in: query
 *        name: breed
 *        type: string
 *        description: Filter by dog's breed
 *      - in: query
 *        name: minAge
 *        schema:
 *          type: number
 *          minimum: 1
 *          maximum: 20
 *        description: Filter by dog's minimum age
 *      - in: query
 *        name: maxAge
 *        schema:
 *          type: number
 *          minimum: 1
 *          maximum: 20
 *        description: Filter by dog's maximum age
 *      - in: query
 *        name: name
 *        schema:
 *          type: string
 *        description: Filter by dog's name
 *      - in: query
 *        name: sortByStatus
 *        type: number
 *        enum: [-1, 1]
 *        description: Sort list by adoption status
 *      - in: query
 *        name: sortByGender
 *        type: number
 *        enum: [-1, 1]
 *        description: Sort list by gender
 *      - in: query
 *        name: sortByRace
 *        type: number
 *        enum: [-1, 1]
 *        description: Sort list by breed
 *      - in: query
 *        name: sortByAge
 *        type: number
 *        enum: [-1, 1]
 *        description: Sort list by age
 *      - in: query
 *        name: sortByName
 *        type: number
 *        enum: [-1, 1]
 *        description: Sort list by name
 *      - in: query
 *        name: sortByLastUpdated
 *        type: number
 *        enum: [-1, 1]
 *        description: Sort list by last updated date
 *     responses:
 *       200:
 *         description: Returns the dogs filtered list
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
 *         description: Internal server error
 */
router.get('/', validateAndConvertQuery, filterDogFromQueryCtrl);

/**
 * @swagger
 * /dogs/{dogId}/isOwner:
 *   get:
 *     tags: ['Dogs operations']
 *     description: Check if the dog belongs to the authenticated user (owner)
 *     security:
 *        cookieAuth:
 *          - connect.sid
 *     parameters:
 *      - in: path
 *        name: dogId
 *        required: true
 *        type: string
 *        description: The dog's ID
 *     responses:
 *       200:
 *         description: Returns true if the authenticated user is the owner of the dog
 *         content:
 *           application/json:
 *               schema:
 *                  type: object
 *                  properties:
 *                    isOwner:
 *                      type: boolean
 *                      example: true
 *       401:
 *         description: Unauthenticated/unauthorized user
 *       500:
 *         description: Internal server error
 */
router.get(
    '/isOwner/:dogId',
    isAuthenticatedMW,
    validateOwnerMW,
    getApprovalForDogOwnershipCtrl,
);

/**
 * @swagger
 * /dogs/:
 *   post:
 *     tags: ['Dogs operations']
 *     description: Create a new dog data
 *     security:
 *        cookieAuth:
 *          - connect.sid
 *     requestBody:
 *        description: The dog's data
 *        required: true
 *        content:
 *           application/json:
 *               schema:
 *                  $ref: "#/components/schemas/dog"
 *     responses:
 *       201:
 *         description: Return the data of the dog that have been created
 *         content:
 *           application/json:
 *               schema:
 *                  $ref: "#/components/schemas/dog"
 *       401:
 *         description: Unauthenticated user
 *       500:
 *         description: Internal server error
 */
router.post('/', isAuthenticatedMW, createNewDogCtrl, createDogLimiter);

/**
 * @swagger
 * /dogs/{dogId}:
 *   put:
 *     tags: ['Dogs operations']
 *     description: Update dog's data by hid ID
 *     security:
 *        cookieAuth:
 *          - connect.sid
 *     parameters:
 *      - in: path
 *        name: dogId
 *        required: true
 *        type: string
 *        description: The dog's ID
 *     requestBody:
 *        description: Dog's data
 *        required: true
 *        content:
 *           application/json:
 *               schema:
 *                  $ref: "#/components/schemas/dog"
 *     responses:
 *       206:
 *         description: Return the data of the dog that have been updated
 *         content:
 *           application/json:
 *               schema:
 *                  $ref: "#/components/schemas/dog"
 *       401:
 *         description: Unauthenticated/unauthorized user
 *       500:
 *         description: Internal server error
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
 *     tags: ['Dogs operations']
 *     description: Delete dog's data by his ID
 *     security:
 *        cookieAuth:
 *          - connect.sid
 *     parameters:
 *      - in: path
 *        name: dogId
 *        required: true
 *        type: string
 *        description: The dog's ID
 *     responses:
 *       200:
 *         description: The dog's data have been deleted successfully
 *       400:
 *         description: Delete process failed
 *       401:
 *         description: Unauthenticated user
 *       500:
 *         description: Internal server error
 */
router.delete(
    '/:dogId',
    isAuthenticatedMW,
    validateOwnerMW,
    deleteDogByIdCtrl,
    deleteDogLimiter
);

export = router;
