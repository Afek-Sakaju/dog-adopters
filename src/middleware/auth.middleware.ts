import express, { Request, Response, NextFunction } from 'express';

export function isAuthenticatedMW(
    req: Request,
    res: Response,
    next: NextFunction
) {
    if (req.isAuthenticated()) next();
    else res.redirect('/login.html');
}
