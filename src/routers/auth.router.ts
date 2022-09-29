import express, { Request, Response, NextFunction } from 'express';
import passport from 'passport';

import {
    createNewUserCtrl,
    getUserByIdCtrl,
} from '../controllers/user.controller';

const router = express.Router();

router.use(function (req: Request, res: Response, next: NextFunction) {
    console.log(
        `${req.method}:${req.originalUrl} body: ${JSON.stringify(req.body)}`
    );
    next();
});

/*
parameters:
  - in: cookie
    name: sessionId
    required: true
    schema:
      type: string
 */

/**
 * @swagger
 * /auth/login:
 *   post:
 *     tags: ['Auth operations']
 *     description: Login to the application
 *     requestBody:
 *        description: the user information for registering
 *        required: true
 *        content:
 *           application/json:
 *               schema:
 *                  type: object
 *                  required: [ "username", "password" ]
 *                  properties:
 *                      username:
 *                          type: String
 *                          example: Hadriel Benjo
 *                      password:
 *                          type: string
 *                          example: '0000'
 *     responses:
 *       200:
 *           description: login
 *           headers:
 *               Set-Cookie:
 *                   schema:
 *                       type: string
 *                       example: connect.sid=fd4698c940c6d1da602a70ac34f0b147; Path=/; HttpOnly
 */
router.post(
    '/login',
    passport.authenticate('local', {
        successRedirect: '/home.html', //'http://localhost:3000/home.html',
        failureRedirect: '/login.html', //'http://localhost:3000/login.html',
    })
);

/**
 * @swagger
 * /auth/register:
 *   post:
 *     tags: ['Auth operations']
 *     description: Register a new user to the application
 *     requestBody:
 *        description: the user information for registering
 *        required: true
 *        content:
 *           application/json:
 *               schema:
 *                  type: object
 *                  required: [ "username", "password" ]
 *                  properties:
 *                      username:
 *                          type: String
 *                          example: Hadriel Benjo
 *                      password:
 *                          type: string
 *                          example: '0000'
 *                      fullName:
 *                          type: string
 *                          example:
 *                      phoneNumber:
 *                          type: string
 *                          example:
 *     responses:
 *       200:
 *         description: Returns the requested user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/user"
 *       500:
 *          description: "Server error"
 *
 */
router.post('/register', createNewUserCtrl);

/**
 * @swagger
 * /auth/{userId}:
 *   get:
 *     tags: ['Auth operations']
 *     parameters:
 *      - in: path
 *        name: userId
 *        required: true
 *        type: string
 *        description: The user ID.
 *     description: Get a user by userId
 *     responses:
 *       200:
 *         description: Returns the requested user
 */
router.get('/:userId', getUserByIdCtrl);

export = router;
