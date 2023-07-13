import express, { Request, Response, NextFunction } from 'express';
import passport from 'passport';

import logger from '../utils/logger';
import {
    createNewUserCtrl,
    getUserByIdCtrl,
    getAuthenticatedUserCtrl,
} from '../controllers/user.controller';
import { isAuthenticatedMW } from '../middleware/auth.middleware';
import {
    loginLimiter,
    registerLimiter,
} from '../middleware/limitters.middlware';

const router = express.Router();

router.use(function (req: Request, res: Response, next: NextFunction) {
    logger.debug(req.id, 'Call to API', {
        method: req.method,
        originalUrl: req.originalUrl,
        body: req.body,
    });
    next();
});

/**
 * @swagger
 * /auth/login:
 *   post:
 *     tags: ['Auth operations']
 *     description: Login to the app
 *     requestBody:
 *        description: User's data
 *        required: true
 *        content:
 *           application/json:
 *               schema:
 *                  type: object
 *                  required: [ "username", "password" ]
 *                  properties:
 *                      username:
 *                          type: string
 *                          example: "MyUserName"
 *                      password:
 *                          type: string
 *                          example: "MyPassword515"
 *     responses:
 *       200:
 *         description: Logged in successfully
 *         content:
 *             application/json:
 *                   schema:
 *                       $ref: "#/components/schemas/user"
 *       400:
 *         description: Login failed
 *       500:
 *         description: Internal server error
 */
router.post('/login', loginLimiter, (req, res, next) => {
    passport.authenticate('local', (err, user, _info) => {
        if (err) return res.sendStatus(500);
        if (!user) return res.sendStatus(401);

        req.login(user, (err) => {
            if (err) return res.sendStatus(500);

            return res.status(200).json(user);
        });
    })(req, res, next);
});

/**
 * @swagger
 * /auth/logout:
 *   post:
 *     tags: ['Auth operations']
 *     description: Logout from the app
 *     responses:
 *       200:
 *         description: Logged out successfully
 *       500:
 *         description: Internal server error
 */
router.post('/logout', function (req, res, _next) {
    req.logout(function () {
        logger.debug(req.id, 'Logout API request redirected to home page');
        res.redirect('/');
    });
});

/**
 * @swagger
 * /auth/register:
 *   post:
 *     tags: ['Auth operations']
 *     description: Register a new user
 *     requestBody:
 *        description: The user's data
 *        required: true
 *        content:
 *           application/json:
 *               schema:
 *                  type: object
 *                  required: [ "username", "password" ]
 *                  properties:
 *                      username:
 *                          type: string
 *                          example: "MyUserName"
 *                      password:
 *                          type: string
 *                          example: "MyPassword515"
 *                      fullName:
 *                          type: string
 *                          example: "George Georgiano"
 *                      phoneNumber:
 *                          type: string
 *                          example: "0102324545"
 *     responses:
 *       200:
 *         description: Returns the data of the user that have been created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/user"
 *       500:
 *         description: Internal server error
 */
router.post('/register', registerLimiter, createNewUserCtrl);

/**
 * @swagger
 * /auth/authenticatedUserData:
 *   get:
 *     tags: ['Auth operations']
 *     description: Get authenticated user data
 *     security:
 *        cookieAuth:
 *          - connect.sid
 *     responses:
 *       200:
 *         description: Return user's data
 *       302:
 *         description: Unauthenticated user
 *       500:
 *         description: Internal server error
 */
router.get(
    '/authenticatedUserData',
    isAuthenticatedMW,
    getAuthenticatedUserCtrl
);
// Todo: fix that 302 code

/**
 * @swagger
 * /auth/{userId}:
 *   get:
 *     tags: ['Auth operations']
 *     description: Get a user by userId
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
 *         description: Return the user doc data
 *       302:
 *         description: Unauthenticated user - redirect to login page
 *       500:
 *         description: Internal server error
 */
router.get('/:userId', isAuthenticatedMW, getUserByIdCtrl);
// Todo: fix that 302 code

export = router;
