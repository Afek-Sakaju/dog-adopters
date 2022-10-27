import { Request, Response, NextFunction } from 'express';

export function isAuthenticatedMW(
    req: Request,
    res: Response,
    next: NextFunction
) {
    if (req.isAuthenticated()) next();
    else {
        if (req.method === 'GET') {
            res.redirect('/login.html');
        } else {
            next('Unauthorized user!');
        }
    }
}
