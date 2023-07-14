import { Document } from 'mongoose';

import { IUser } from './user.interface';

export interface IDog {
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
    owner: string | null;
}

export interface IDogQuery {
    status?: number;
    gender?: string;
    race?: string[];
    minAge?: number;
    maxAge?: number;
    name?: string;
    page: number;
    itemsPerPage: number;
    sortByStatus?: number;
    sortByGender?: number;
    sortByRace?: number;
    sortByAge?: number;
    sortByName?: number;
    sortByLastUpdated?: number;
}

export interface IPagination {
    page: number;
    totalItems: number;
    itemsPerPage: number;
    totalPages: number;
}

export interface IFilterResult {
    pagination: IPagination;
    data: IDog[];

    [Symbol.iterator](): Iterator<IDog[]>;
}

export type IDogDoc = (Document & IDog) | null | undefined;
