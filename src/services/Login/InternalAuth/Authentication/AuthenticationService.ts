import jwt from 'jsonwebtoken'
import {User} from "../../../../interfaces/Users/index.js";
import AbstractAuthenticationService from "./AbstractAuthenticationService.js";
export default class AuthenticationService<T extends User> extends AbstractAuthenticationService<T> {
    signJwt(user: T) {
        const jwtToken = jwt.sign({
            userId: user.id,
            nickName: user.nickName,
            role: user.role
        }, process.env.JWT_TOKEN_KEY as string, {
            expiresIn: '5m'
        })
        return jwtToken
    }
}
