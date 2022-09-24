import { Request, Response, NextFunction } from 'express';

import { getUserById, createNewUser } from '../services/user.service';
import { IUser } from '../interfaces/user.interface';

export async function getUserByIdCtrl(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const user: IUser | undefined = await getUserById(req.params.userId);

    res.json(user);
}

export async function createNewUserCtrl(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const user: IUser = {
        username: req.body.username,
        password: req.body.password,
        phoneNumber: req.body.phoneNumber,
        fullName: req.body.fullName,
    } as IUser; // to ignore undefined params;

    const result = await createNewUser(user);

    res.status(201).json(result);
}
