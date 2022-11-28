import express, { Request, Response, NextFunction } from 'express';
import passport from 'passport';
import logger from '../utils/logger';
import {
    createNewUserCtrl,
    getUserByIdCtrl,
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
 *     description: Login to the application
 *     requestBody:
 *        description: The user information for login
 *        required: true
 *        content:
 *           application/json:
 *               schema:
 *                  type: object
 *                  required: [ "username", "password" ]
 *                  properties:
 *                      username:
 *                          type: String
 *                          example: Afek Sakajo
 *                      password:
 *                          type: string
 *                          example: '0000'
 *     responses:
 *       200:
 *           description: Login successfully
 *           headers:
 *               Set-Cookie:
 *                   schema:
 *                       type: string
 *                       example: connect.sid=fd4698c940c6d1da602a70ac34f0b147; Path=/; HttpOnly
 *       500:
 *          description: Login failed
 *       400:
 *          description: Bad request - missing data
 */
router.post(
    '/login',
    loginLimiter,
    passport.authenticate('local', {
        successRedirect: '/home.html',
        failureRedirect: '/login.html',
    })
);

/**
 * @swagger
 * /auth/logout:
 *   post:
 *     tags: ['Auth operations']
 *     description: Logout from the application
 *     responses:
 *       200:
 *           description: Logout successfully
 *       500:
 *          description: Error in the logout  procces
 */
router.post('/logout', function (req, res, next) {
    req.logout(function () {
        logger.debug(req.id, 'Logout API request redirected to login page');
        res.redirect('/login.html');
    });
});

/**
 * @swagger
 * /auth/register:
 *   post:
 *     tags: ['Auth operations']
 *     description: Register a new user to the application
 *     requestBody:
 *        description: The user information for registering
 *        required: true
 *        content:
 *           application/json:
 *               schema:
 *                  type: object
 *                  required: [ "username", "password" ]
 *                  properties:
 *                      username:
 *                          type: String
 *                          example: Afek Sakajo
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
 *          description: Internal Server Error
 *
 */
router.post('/register', registerLimiter, createNewUserCtrl);

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
 */
router.get('/:userId', isAuthenticatedMW, getUserByIdCtrl);

export = router;
