import jwt from 'jsonwebtoken'
import {User} from "../../../interfaces/Users/index.js";
export default class AuthenticationService {
    tokenService
    constructor() {
        this.tokenService = jwt
    }
    authenticate(user: User) {
        const jwtToken = this.tokenService.sign({
            userId: user.id,
            email: user.nickName
        }, process.env.JWT_TOKEN_KEY as string, {
            expiresIn: '1m'
        })
        return jwtToken
    }
}
