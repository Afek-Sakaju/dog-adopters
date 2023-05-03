import { IDogQuery } from './interfaces/dog.interface';

declare global {
    namespace Express {
        interface Request {
            id: string;
            user?: any;
            queryFilters?: IDogQuery;
        }
    }
}
