import ILoginService, {LoginFailed, LoginSucceed} from "../../../interfaces/Login/LoginService/index.js";
import IValidationService from "../../../interfaces/Login/ValidationService/index.js";
import {IUsersCredentials} from "../../../interfaces/Login/IUsersCredentials/index.js";
import {JwtUserSign, User} from "../../../interfaces/Users/index.js";
import jwt from 'jsonwebtoken'
import {IAuthenticationService} from "../../../interfaces/Login/AuthenticationService/index.js";
import ServerError from "../../../helpers/Errors/ServerError.js";

export default abstract class AbstractLoginService implements ILoginService {
    abstract authenticationService: IAuthenticationService<JwtUserSign>
    abstract validationService: IValidationService

    async callLoginService(userCredentials: IUsersCredentials): Promise<LoginSucceed | LoginFailed> {
        const user = await this.validationService.validate(userCredentials) as User | false
        if (!user) throw new ServerError(403, 'Id ou senha incorretos')
        const userDataToJwt = {
            id: user.id as number,
            nickName: user.nickName,
            role: user.role
        }
        const jwtToken = this.authenticationService.signJwt(userDataToJwt)
        return { status: 200, token: jwtToken.jwtToken, refreshToken: jwtToken.refreshToken, user };
    }
}
