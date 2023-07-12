import { IDogQuery } from './interfaces/dog.interface';
import { IUser } from './interfaces/user.interface';

declare global {
    namespace Express {
        interface Request {
            id: string;
            user?: IUser;
            queryFilters?: IDogQuery;
        }
    }
}
