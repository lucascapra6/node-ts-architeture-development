import AbstractLoginService from "./AbstractLoginService.js";
import ValidationService from "./ValidationService.js";
import AuthenticationService from "./AuthenticationService.js";
import IValidationService from "../../../interfaces/Login/ValidationService/index.js";
import {IUsersCredentials} from "../../../interfaces/Login/IUsersCredentials/index.js";

export default class UserLoginService<T> extends AbstractLoginService<T>{
    validationService
    authenticationService
    constructor() {
        super();
        this.validationService = new ValidationService<T>()
        this.authenticationService = new AuthenticationService()
    }

    callLoginService(userCredentials: T) {
        return this.validationService.validate(userCredentials)
    }
}
