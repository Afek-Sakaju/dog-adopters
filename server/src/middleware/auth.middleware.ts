import { Request, Response, NextFunction } from 'express';
import logger from '../utils/logger';

export function isAuthenticatedMW(
    req: Request,
    res: Response,
    next: NextFunction
) {
    logger.info(req.id, 'Checking if user is authenticated');

    if (req.isAuthenticated()) next();
    else {
        logger.info(req.id, 'User is not authenticated');

        if (req.method === 'GET') {
            res.redirect('/login.html');
        } else {
            next('Unauthorized user!');
        }
    }
}
