import {IAuthenticationService} from "../../../../interfaces/Login/AuthenticationService/index.js";
import {User} from "../../../../interfaces/Users/index.js";
import jwt from "jsonwebtoken";

export default abstract class AbstractAuthenticationService<T> implements IAuthenticationService<T> {
    abstract signJwt(user: T): {jwtToken: string, refreshToken: string}
    verifyJwt(token: string, tokenKey: string) {
        try {
            const decoded = jwt.verify(token, tokenKey)
            return decoded
        } catch (e) {
            return false
        }
    }
}
