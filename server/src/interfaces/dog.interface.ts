import { Document } from 'mongoose';

import { IUser } from './user.interface';

export interface IDog {
    _id: string;
    adopter: IUser;
    adoptionAt: Date;
    age: number;
    characteristics: string[];
    gender: string;
    image: string;
    isDesexed: boolean;
    isVaccinated: boolean;
    name: string;
    notes: string;
    owner: string | null;
    race: string;
    status: number;
}

export interface IDogQuery {
    gender?: string;
    itemsPerPage: number;
    maxAge?: number;
    minAge?: number;
    name?: string;
    page: number;
    race?: string[];
    sortByAge?: number;
    sortByGender?: number;
    sortByLastUpdated?: number;
    sortByName?: number;
    sortByRace?: number;
    sortByStatus?: number;
    status?: number;
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
