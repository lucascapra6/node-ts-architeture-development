import {IUsersCredentials} from "../../interfaces/Login/IUsersCredentials/index.js";
import ILoginService, {LoginFailed, LoginSucceed} from "../../interfaces/Login/LoginService/index.js";
import ILoginController from "../../interfaces/Login/LoginController/index.js";
import Login from "../../routes/Login/index.js";
import IRefreshTokenService from "../../interfaces/Login/RefreshToken/index.js";
import ServerError from "../../helpers/Errors/ServerError.js";
class LoginController implements ILoginController {
    loginService
    refreshTokenService
    constructor(loginService: ILoginService, refreshTokenService: IRefreshTokenService) {
        this.loginService = loginService
        this.refreshTokenService = refreshTokenService
    }

    async handleLogin(userCredentials: IUsersCredentials): Promise<LoginFailed | LoginSucceed> {
        const session = await this.loginService.callLoginService(userCredentials)
        return session
    }
    async handleRefreshToken(id: number, role: string, refreshToken: string) {
        if(!id || !role || !refreshToken) throw new ServerError(500, 'Missing parameters')
        const tokens = this.refreshTokenService.refreshToken(id, role, refreshToken)
        return tokens
    }
}

export default LoginController
