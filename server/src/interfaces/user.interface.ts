import { Document, ObjectId } from 'mongoose';

export interface IUser {
    _id: ObjectId;
    username: string;
    password: string;
    phoneNumber: string;
    fullName: string;
    isAdmin: boolean;
}

export type passportUser = {
    _id?: number;
};

export type IUserDoc = (Document & IUser) | null | undefined;
