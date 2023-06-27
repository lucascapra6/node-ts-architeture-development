import {NextFunction, Request, Response} from "express";

export function checkLoggedIn(req: Request, res: Response, next: NextFunction) {
    const isOAuthLoggedIn = req.isAuthenticated() && req.user
    if (!isOAuthLoggedIn) {
        return res.status(401).json({
            error: 'You must log in!',
        });
    }
    next();
}
