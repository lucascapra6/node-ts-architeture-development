import ILoginService, {LoginFailed, LoginSucceed} from "../../../interfaces/Login/LoginService/index.js";
import IValidationService from "../../../interfaces/Login/ValidationService/index.js";
import {IUsersCredentials} from "../../../interfaces/Login/IUsersCredentials/index.js";
import {User} from "../../../interfaces/Users/index.js";
import jwt from 'jsonwebtoken'
import {IAuthenticationService} from "../../../interfaces/Login/AuthenticationService/index.js";
export default abstract class AbstractLoginService implements ILoginService {
    abstract authenticationService: IAuthenticationService
    abstract validationService: IValidationService

    async callLoginService(userCredentials: IUsersCredentials): Promise<LoginSucceed | LoginFailed> {
        try {
            const user = await this.validationService.validate(userCredentials) as User | false;
            if (!user) return { status: 403, msg: 'Id ou senha incorretos' };
            const jwtToken = this.authenticationService.authenticate(user)
            return { status: 200, token: jwtToken, refreshToken: 'jla389as90dfj9031j90asdjf90j901r', user };
        } catch (e: any) {
            console.log(e);
            throw e;
        }
    }
}
