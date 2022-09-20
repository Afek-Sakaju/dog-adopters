import express, { Request, Response, NextFunction } from 'express';

export function isAuthenticatedMW(
    req: Request,
    res: Response,
    next: NextFunction
) {
    if (req.isAuthenticated()) next();
    else res.redirect('/login.html');
}

export function isAdminMW(req: Request, res: Response, next: NextFunction) {
    // to do:implement admin check if neccesary
}
