import {IUsersCredentials} from "../../interfaces/Login/IUsersCredentials/index.js";
import ILoginService from "../../interfaces/Login/LoginService/index.js";
import ILoginController from "../../interfaces/Login/LoginController/index.js";
class LoginController<T> implements ILoginController<T>{
    loginService
    constructor(loginService: ILoginService<T>) {
        this.loginService = loginService
    }

    handleLogin(userCredentials: T) {
        return this.loginService.callLoginService(userCredentials)
    }
}

export default LoginController
