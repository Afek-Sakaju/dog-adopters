import { Request, Response, NextFunction } from 'express';

import { getUserById, createNewUser } from '../services/user.service';
import { IUser, IUserDoc } from '../interfaces/user.interface';
import logger from '../utils/logger';

export async function getUserByIdCtrl(
    req: Request,
    res: Response,
    next: NextFunction
) {
    logger.info(req.id, 'Getting user by id', { userId: req.params.userId });
    let user;

    try {
        user = (await getUserById(req.params.userId, req.id)) as IUserDoc;
    } catch (error) {
        next(error);
    }

    logger.info(req.id, 'Get user by id request results', { userData: user });

    res.json(user);
}

export async function createNewUserCtrl(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const user = {
            username: req.body.username,
            password: req.body.password,
            ...(req.body.fullName && { fullName: req.body.fullName }),
            ...(req.body.phoneNumber && { phoneNumber: req.body.phoneNumber }),
        } as IUser;

        logger.info(req.id, 'Creating new user', { userData: user });

        const userDoc: IUserDoc = await createNewUser(user, req.id);

        logger.info(req.id, 'User creation results', { createdUser: user });

        res.status(201).json(userDoc);
    } catch (error) {
        next(error);
    }
}

export async function getAuthenticatedUserCtrl(
    req: Request,
    res: Response,
    _next: NextFunction
) {
    logger.info(req.id, 'Getting authenticated user data', {
        userData: req?.user,
    });

    res.json(req?.user);
}
