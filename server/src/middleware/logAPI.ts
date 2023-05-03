import { NextFunction, Request, Response } from 'src/express';
import logger from '../utils/logger';

export default function logAPI(
    request: Request,
    response: Response,
    next: NextFunction
) {
    logger.debug(request.id, 'call to api', {
        method: request.method,
        originalUrl: request.originalUrl,
    });
    next();
}
