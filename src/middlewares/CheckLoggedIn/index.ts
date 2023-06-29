import {NextFunction, Request, Response} from "express";
import jwt from "jsonwebtoken";
import {User} from "../../interfaces/Users/index.js";

export function checkUserLoggedIn(req: Request, res: Response, next: NextFunction) {
    const token = req.headers['x-access-token']
    const jwtPayload = verifyJwtToken(token as string, process.env.JWT_TOKEN_KEY as string)
    const isOAuthLoggedIn = req.isAuthenticated() && req.user
    if (isOAuthLoggedIn || jwtPayload) {
        next()
        return
    }
    return res.status(401).json({
        error: 'You must log in!',
    });
}

export function checkAdminLoggedIn(req: Request, res: Response, next: NextFunction) {
    const token = req.headers['x-access-token']
    const jwtPayload = verifyJwtToken(token as string, process.env.JWT_TOKEN_KEY as string) as User
    if(jwtPayload.role !== 'admin') {
        return res.status(401).json({error: 'You dont have permission'})
    }
    next()
}

function verifyJwtToken(token: string, tokenKey: string) {
    try {
        const decoded = jwt.verify(token, tokenKey)
        return decoded
    } catch (e) {
        return false
    }
}
