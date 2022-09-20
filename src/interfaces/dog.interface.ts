import { IUser } from './user.interface';

export interface IDog {
    // default - you dont need than to {} on the import statement
    _id: string;
    race: string;
    gender: string;
    age: number;
    vaccines: number;
    behave: string[];
    image: string;
    name: string;
    status: number;
    adopter: IUser;
    adoptionAt: Date;
    owner: IUser;
}

export interface IDogQuery {
    status?: string;
    gender?: string;
    race?: string;
    minAge?: number;
    maxAge?: number;
    name?: string;
}
