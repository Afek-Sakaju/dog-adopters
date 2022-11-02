import { IUser } from '../interfaces/user.interface';
import { UserModel } from '../models';
import logger from '../utils/logger';

export async function getUserById(
    requestId: string,
    userId: string
): Promise<IUser | undefined> {
    logger.verbose(requestId, 'Running request to get user by id from DB');

    const userDoc: any = await UserModel.findById(userId);
    return userDoc?.toJSON() as unknown as IUser | undefined;
}

export async function createNewUser(
    requestId: string,
    user: IUser
): Promise<IUser | undefined> {
    logger.verbose(requestId, 'Creation request of new user to DB');

    const userDoc = new UserModel(user);
    const res: any = await userDoc.save();

    return res.toJSON();
}

export async function getUserByUsername(
    requestId: string,
    name: string
): Promise<IUser | undefined> {
    logger.verbose(
        requestId,
        "Getting user's username and password by his username from DB",
        {
            username: name,
        }
    );

    const userDoc: any = await UserModel.findOne({ username: name }).select(
        'username password'
    );

    return userDoc as unknown as IUser | undefined;
}
