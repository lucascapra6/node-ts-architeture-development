import ILoginService from "../../interfaces/Login/LoginService/index.js";
import ILoginController from "../../interfaces/Login/LoginController/index.js";
declare class LoginController<T> implements ILoginController<T> {
    loginService: ILoginService<T>;
    constructor(loginService: ILoginService<T>);
    handleLogin(userCredentials: T): void;
}
export default LoginController;
