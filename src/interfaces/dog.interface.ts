//todo : change to IDog not Idog
export interface Idog {
    // default - you dont need than to {} on the import statement
    id: string;
    race: string;
    gender: string;
    age: number;
    vaccines: number;
    behave: string[];
    image: string;
    name: string;
    status: number;
}

export interface IdogQuery {
    status?: string;
    gender?: string;
    race?: string;
    minAge?: number;
    maxAge?: number;
    name?: string;
}
