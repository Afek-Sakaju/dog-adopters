import { Request, Response, NextFunction } from 'express';

import { getUserById, createNewUser } from '../services/user.service';
import { IUser } from '../interfaces/user.interface';

export async function getUserByIdCtrl(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const user: IUser | undefined = await getUserById(req.params.userId);

    const status = user === undefined ? 500 : 200;
    res.status(status).json(user);
}

export async function createNewUserCtrl(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const user: IUser = {
            username: req.body.username,
            password: req.body.password,
            ...(req.body.fullName && { fullName: req.body.fullName }),
            ...(req.body.phoneNumber && { phoneNumber: req.body.phoneNumber }),
        } as IUser; // to ignore undefined params;

        const result = await createNewUser(user);

        res.status(201).json(result);
    } catch (error) {
        next(error);
    }
}
