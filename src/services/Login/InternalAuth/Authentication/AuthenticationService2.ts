import AbstractAuthenticationService from "./AbstractAuthenticationService.js";
import jwt from "jsonwebtoken";

export default class AuthenticationService2<T extends {name: string, lastName: string}> extends AbstractAuthenticationService<T>{
    signJwt(user: T) {
        const jwtToken = jwt.sign({
            name: user.name,
            lastName: user.lastName,
        }, process.env.JWT_TOKEN_KEY as string, {
            expiresIn: '5m'
        })

        const refreshToken = 'asdf'
        return {jwtToken, refreshToken}
    }
}
