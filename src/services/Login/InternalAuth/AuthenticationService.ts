import jwt from 'jsonwebtoken'
import {User} from "../../../interfaces/Users/index.js";
import {IAuthenticationService} from "../../../interfaces/Login/AuthenticationService/index.js";
export default class AuthenticationService implements IAuthenticationService {
    tokenService
    constructor() {
        this.tokenService = jwt
    }
    authenticate(user: User) {
        const jwtToken = this.tokenService.sign({
            userId: user.id,
            nickName: user.nickName,
            role: user.role
        }, process.env.JWT_TOKEN_KEY as string, {
            expiresIn: '5m'
        })
        return jwtToken
    }
}
