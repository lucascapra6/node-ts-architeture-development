import ILoginService from "../../interfaces/Login/LoginService/index.js";
export default class AbstractLoginService<T> implements ILoginService<T> {
    authenticationService: any;
    validationService: any;
    constructor();
    callLoginService<T>(userCredentials: T): void;
}
