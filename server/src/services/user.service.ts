import { IUser, IUserDoc } from '../interfaces/user.interface';
import { UserModel } from '../models';
import { TEST_REQ_ID } from '../test-utils/environment-variables';
import logger from '../utils/logger';

export async function getUserById(
    userId: string,
    requestId: string = TEST_REQ_ID
): Promise<IUserDoc> {
    logger.verbose(requestId, 'Running request to get user by id from DB');

    const userDoc: IUserDoc | null | undefined = await UserModel.findById(
        userId
    );
    return userDoc;
}

export async function createNewUser(
    user: IUser,
    requestId: string = TEST_REQ_ID
): Promise<IUserDoc> {
    logger.verbose(requestId, 'Creation request of new user to DB');

    const userDoc = new UserModel(user);
    const res: IUserDoc = await userDoc.save();
    return res;
}

export async function getUserByUsername(
    name: string,
    requestId: string = TEST_REQ_ID
): Promise<IUserDoc> {
    logger.verbose(
        requestId,
        "Getting user's username and password by his username from DB",
        { username: name }
    );

    const userDoc: IUserDoc = await UserModel.findOne({
        username: name,
    }).select('username password');

    return userDoc;
}
