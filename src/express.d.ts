import { IDogQuery } from './interfaces/dog.interface';

export {};

declare global {
    namespace Express {
        interface Request {
            user?: any;
            queryFilters?: IDogQuery;
        }
    }
}
