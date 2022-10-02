import { Request, Response, NextFunction } from 'express';

export function isAuthenticatedMW(
    req: Request,
    res: Response,
    next: NextFunction
) {
    if (req.isAuthenticated()) next();
    else {
        if (req.method === 'get') {
            res.status(302).redirect('/login.html');
        } else {
            next('Unauthorized user!');
        }
    }
}
