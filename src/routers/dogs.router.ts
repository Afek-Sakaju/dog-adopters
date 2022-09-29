import express from 'express';

import {
    getDogByIdCtrl,
    filterDogFromQueryCtrl,
    updateDogCtrl,
    createNewDogCtrl,
    deleteDogByIdCtrl,
} from '../controllers/dogs.controller';
import { isAuthenticatedMW } from '../middleware/auth.middleware';
import {
    validateOwnerMW,
    validateAndConvertQuery,
} from '../middleware/dogs.middleware';

const router = express.Router();

/**
 * @swagger
 * /dogs/{dogId}:
 *   get:
 *     tags: ['Dog CRUD operations']
 *     description: get dog data by dogId
 *     parameters:
 *      - in: path
 *        name: dogId
 *        required: true
 *        type: string
 *        description: The dog ID.
 *     responses:
 *       200:
 *         description: return the dog doc data
 *         content:
 *           application/json:
 *               schema:
 *                  $ref: "#/components/schemas/dog"
 *       302:
 *         description: unauthenticated user - redirect to login page
 */
router.get('/:dogId', getDogByIdCtrl);

/**
 * @swagger
 * /dogs/:
 *   get:
 *     tags: ['Dog CRUD operations']
 *     description: get dog data by dogId
 *     parameters:
 *      - in: query
 *        name: status
 *        type: number
 *        enum: [0, 1]
 *        description: filter by dog's status.
 *     responses:
 *       200:
 *         description: return the dog doc data
 *         content:
 *           application/json:
 *               schema:
 *                  type: object
 *                  properties:
 *                      pagination:
 *                          type: array
 *                          items:
 *                            $ref: "#/components/schemas/pagination"
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
 *     description: update dog data by dogId
 *     security:
 *        cookieAuth:
 *          - connect.sid
 *     parameters:
 *      - in: cookie
 *        name: connect.sid
 *        schema:
 *          type: String
 *     requestBody:
 *        description: create a new dog
 *        required: true
 *        content:
 *           application/json:
 *               schema:
 *                  $ref: "#/components/schemas/dog"
 *     responses:
 *       201:
 *         description: return the dog doc data
 *         content:
 *           application/json:
 *               schema:
 *                  $ref: "#/components/schemas/dog"
 *       302:
 *         description: unauthenticated user - redirect to login page
 *       500:
 *         description: Internal Server Error
 */
router.post('/', isAuthenticatedMW, createNewDogCtrl);

/**
 * @swagger
 * /dogs/{dogId}:
 *   put:
 *     tags: ['Dog CRUD operations']
 *     description: update dog data by dogId
 *     security:
 *        cookieAuth:
 *          - connect.sid
 *     parameters:
 *      - in: path
 *        name: dogId
 *        required: true
 *        type: string
 *        description: The dog ID.
 *      - in: cookie
 *        name: connect.sid
 *        schema:
 *          type: String
 *     requestBody:
 *        description: update dog information
 *        required: true
 *        content:
 *           application/json:
 *               schema:
 *                  $ref: "#/components/schemas/dog"
 *     responses:
 *       206:
 *         description: return the dog doc data
 *         content:
 *           application/json:
 *               schema:
 *                  $ref: "#/components/schemas/dog"
 *       302:
 *         description: unauthenticated user - redirect to login page
 *       500:
 *         description: Internal Server Error
 */
router.put('/:dogId', isAuthenticatedMW, validateOwnerMW, updateDogCtrl);

/**
 * @swagger
 * /dogs/{dogId}:
 *   delete:
 *     tags: ['Dog CRUD operations']
 *     description: remove dog data by dogId
 *     security:
 *        cookieAuth:
 *          - connect.sid
 *     parameters:
 *      - in: path
 *        name: dogId
 *        required: true
 *        type: string
 *        description: The dog ID.
 *      - in: cookie
 *        name: connect.sid
 *        schema:
 *          type: String
 *     responses:
 *       200:
 *         description: dog deleted successfully
 *       302:
 *         description: unauthenticated user - redirect to login page
 *       500:
 *         description: Internal Server Error
 */
router.delete('/:dogId', isAuthenticatedMW, validateOwnerMW, deleteDogByIdCtrl);

export = router;
