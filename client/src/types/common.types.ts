import { User } from './data-models.types';
import type { MuiColor, MuiRadioGroupSizes } from './mui.types';

export interface StandardStringsObject {
    [key: string]: string;
}

export type RadioGroupOption = {
    label?: string;
    value?: unknown;
    color?: MuiColor;
    size?: MuiRadioGroupSizes;
};

export type SelectOption = {
    label?: string;
    value?: string | number | readonly string[];
};

export interface DogFiltersFormValues {
    status: string;
    gender: string;
    minAge: number;
    maxAge: number;
    breed: string;
    name: string;
}

export interface PaginationData {
    itemsPerPage: number;
    page: number;
    totalItems: number;
    totalPages: number;
}

export type UserAuthCb = ({ userData }: { userData: User }) => Promise<User>;
