import AbstractLoginService from "./AbstractLoginService.js";
import ValidationService from "./ValidationService.js";
import AuthenticationService from "./AuthenticationService.js";
import IValidationService from "../../../interfaces/Login/ValidationService/index.js";
import {IUsersCredentials} from "../../../interfaces/Login/IUsersCredentials/index.js";
import {UserModel} from "../../../model/Users/schemas/Users.js";

export default class UserLoginService extends AbstractLoginService {
    validationService
    authenticationService
    constructor() {
        super();
        this.validationService = new ValidationService(UserModel)
        this.authenticationService = new AuthenticationService()
    }
}
