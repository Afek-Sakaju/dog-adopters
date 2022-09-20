import { IUser } from '../interfaces/user.interface';
import { UserModel } from '../models/user.model';

export async function createNewUser(user: IUser): Promise<IUser | undefined> {
    const userDoc = new UserModel(user);
    const res: any = await userDoc.save();

    return res.toJSON();
}

export async function getUserByUsername(
    username: string
): Promise<IUser | undefined> {
    // todo: implement query to find user

    return undefined;
}

export async function getUserById(userId: string): Promise<IUser | undefined> {
    // todo: implement query to find user

    return undefined;
}
