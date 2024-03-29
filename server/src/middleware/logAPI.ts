import { NextFunction, Request, Response } from 'express';

import logger from '../utils/logger';

export default function logAPI(
    request: Request,
    _response: Response,
    next: NextFunction
) {
    logger.debug(request.id, 'call to api', {
        method: request.method,
        originalUrl: request.originalUrl,
    });
    next();
}
