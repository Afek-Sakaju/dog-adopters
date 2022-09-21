import { IUser } from '../interfaces/user.interface';
import { UserModel } from '../models/user.model';
import bcrypt from 'bcrypt';

export async function getUserById(userId: string): Promise<IUser | undefined> {
    const userDoc: any = await UserModel.findById(userId);

    return userDoc?.toJSON() as unknown as IUser | undefined;
}

export async function createNewUser(user: IUser): Promise<IUser | undefined> {
    // todo afek : hook - pre save( this.password = hash )
    const saltRounds = 10;
    const plaintextPassword = user.password;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(plaintextPassword, salt);
    user.password = hash;

    const userDoc = new UserModel(user);
    const res: any = await userDoc.save();

    return res.toJSON();
}

export async function getUserByUsername(
    name: string
): Promise<IUser | undefined> {
    const userDoc: any = await UserModel.findOne({ username: name });

    return userDoc?.toJSON() as unknown as IUser | undefined;
}
