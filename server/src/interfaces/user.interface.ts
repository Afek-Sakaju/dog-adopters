import { Document } from 'mongoose';

export interface IUser {
    _id: string;
    username: string;
    password: string;
    phoneNumber: string;
    fullName: string;
    isAdmin: boolean;
}

export interface IPassportUser {
    _id?: number;
}

export type IUserDoc = (Document & IUser) | null | undefined;
