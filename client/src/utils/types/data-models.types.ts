export interface Dog {
    name?: string;
    notes?: string;
    age?: number;
    isVaccinated?: boolean;
    characteristics?: string[];
    image: string;
    gender: string;
    race: string;
}

export interface User {
    username: string;
    password: string;
    fullName?: string;
    phoneNumber?: string;
}
