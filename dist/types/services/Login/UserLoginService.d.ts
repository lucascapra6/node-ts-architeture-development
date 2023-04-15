import AbstractLoginService from "./AbstractLoginService.js";
import ValidationService from "./ValidationService.js";
import AuthenticationService from "./AuthenticationService.js";
export default class UserLoginService<T> extends AbstractLoginService<T> {
    validationService: ValidationService<T>;
    authenticationService: AuthenticationService;
    constructor();
    callLoginService(userCredentials: T): boolean;
}
