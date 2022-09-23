import mongoose from 'mongoose';
import { IUser } from '../interfaces/user.interface';
import { UserModel } from '../models/user.model';

async function getUserByIdOld(userId: string): Promise<IUser | undefined> {
    const userDoc: any = await UserModel.findById(userId);

    return userDoc?.toJSON() as unknown as IUser | undefined;
}

export async function getUserById(userId: string): Promise<IUser | undefined> {
    // new function uses agregate to return only non private data
    // *another option is to create temp variable for the user,
    // then delete its private data and return
    const [userDoc]: any = await UserModel.aggregate([
        {
            $match: { _id: new mongoose.Types.ObjectId(userId) },
        },
        {
            $project: {
                username: 1,
                fullName: 1,
                /*
                __v: 0,
                updatedAt: 0,
                createdAt: 0,
                isAdmin: 0,*/
            },
        },
    ]);

    return userDoc as unknown as IUser | undefined;
}

export async function createNewUser(user: IUser): Promise<IUser | undefined> {
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
