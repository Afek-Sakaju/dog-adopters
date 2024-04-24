export interface Dog {
    _id?: string;
    name?: string;
    notes?: string;
    age?: number;
    isVaccinated?: boolean;
    isAdopted?: boolean;
    isDesexed?: boolean;
    characteristics?: string[];
    image: string;
    gender: string;
    race: string;
    status?: string;
}

export interface User {
    _id?: string;
    username: string;
    password: string;
    fullName?: string;
    phoneNumber?: string;
}
