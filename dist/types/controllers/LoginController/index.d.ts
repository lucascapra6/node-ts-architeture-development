import { IUsersCredentials } from "../../interfaces/Login/IUsersCredentials/index.js";
declare class LoginController {
    constructor();
    authenticate(userCredentials: IUsersCredentials): void;
}
export default LoginController;
