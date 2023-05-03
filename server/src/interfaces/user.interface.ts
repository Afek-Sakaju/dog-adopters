export interface IUser {
    _id: string;
    username: string;
    password: string;
    phoneNumber: string;
    fullName: string;
    isAdmin: boolean;
}

export type passportUser = {
    _id?: number;
};
