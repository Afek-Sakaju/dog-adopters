import { IUser } from '../interfaces/user.interface';
import { UserModel } from '../models';
import { TEST_REQ_ID } from '../test-utils/environment-variables';
import logger from '../utils/logger';

export async function getUserById(
    userId: string,
    requestId: string = TEST_REQ_ID
): Promise<IUser | undefined> {
    logger.verbose(requestId, 'Running request to get user by id from DB');

    const userDoc: any = await UserModel.findById(userId);
    return userDoc?.toJSON() as unknown as IUser | undefined;
}

export async function createNewUser(
    user: IUser,
    requestId: string = TEST_REQ_ID
): Promise<IUser | undefined> {
    logger.verbose(requestId, 'Creation request of new user to DB');

    const userDoc = new UserModel(user);
    const res: any = await userDoc.save();

    return res.toJSON();
}

export async function getUserByUsername(
    name: string,
    requestId: string = TEST_REQ_ID
): Promise<IUser | undefined> {
    logger.verbose(
        requestId,
        "Getting user's username and password by his username from DB",
        { username: name }
    );

    const userDoc: any = await UserModel.findOne({ username: name }).select(
        'username password'
    );

    return userDoc as unknown as IUser | undefined;
}
