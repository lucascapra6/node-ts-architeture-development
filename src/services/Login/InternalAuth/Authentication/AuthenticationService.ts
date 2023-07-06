import jwt from 'jsonwebtoken'
import {User} from "../../../../interfaces/Users/index.js";
import AbstractAuthenticationService from "./AbstractAuthenticationService.js";
import ServerError from "../../../../helpers/Errors/ServerError.js";
export default class AuthenticationService<T extends User> extends AbstractAuthenticationService<T> {
    signJwt(user: T) {
        const jwtToken = jwt.sign({
            userId: user.id,
            nickName: user.nickName,
            role: user.role,
            type:process.env.JWT_ACCESS
        }, process.env.JWT_ACCESS_TOKEN_KEY as string, {
            subject: user.nickName,
            expiresIn: '5m',
            audience: process.env.JWT_AUDIENCE,
            issuer: process.env.JWT_ISSUER,
        })
        const refreshToken = jwt.sign({
            nickName: user.nickName,
            type:process.env.JWT_REFRESH
        }, process.env.JWT_ACCESS_TOKEN_KEY as string, {
            subject: user.nickName,
            expiresIn: '7m',
            audience: process.env.JWT_AUDIENCE,
            issuer: process.env.JWT_ISSUER,
        })
        return {jwtToken, refreshToken}
    }
}
