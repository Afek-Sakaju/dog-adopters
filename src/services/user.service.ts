import { IUser } from '../interfaces/user.interface';
import { UserModel } from '../models/user.model';

export async function getUserById(userId: string): Promise<IUser | undefined> {
    const userDoc: any = await UserModel.findById(userId);

    return userDoc?.toJSON() as unknown as IUser | undefined;
}

export async function createNewUser(user: IUser): Promise<IUser | undefined> {
    const userDoc = new UserModel(user);

    const res: any = await userDoc.save();

    return res.toJSON();
}

export async function getUserByUsername(
    name: string
): Promise<IUser | undefined> {
    const userDoc: any = await UserModel.findOne({ username: name }).select(
        'username password'
    );

    return userDoc as unknown as IUser | undefined;
}
