import jwt from 'jsonwebtoken'
import {JwtUserSign, User} from "../../../../interfaces/Users/index.js";
import AbstractAuthenticationService from "./AbstractAuthenticationService.js";
export default class AuthenticationService<T extends JwtUserSign> extends AbstractAuthenticationService<T> {
    signJwt(user: T) {
        console.log(user)
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
        }, process.env.JWT_REFRESH_TOKEN_KEY as string, {
            subject: user.nickName,
            expiresIn: '7m',
            audience: process.env.JWT_AUDIENCE,
            issuer: process.env.JWT_ISSUER,
        })
        return {jwtToken, refreshToken}
    }
}
