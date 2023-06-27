import {IUsersCredentials} from "../../interfaces/Login/IUsersCredentials/index.js";
import ILoginService, {LoginFailed, LoginSucceed} from "../../interfaces/Login/LoginService/index.js";
import ILoginController from "../../interfaces/Login/LoginController/index.js";
import Login from "../../routes/Login/index.js";
class LoginController implements ILoginController {
    loginService
    constructor(loginService: ILoginService) {
        this.loginService = loginService
    }

    async handleLogin(userCredentials: IUsersCredentials): Promise<LoginFailed | LoginSucceed> {
        const session = await this.loginService.callLoginService(userCredentials)
        return session
    }
}

export default LoginController
