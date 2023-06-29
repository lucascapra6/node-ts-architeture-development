import AbstractLoginService from "./AbstractLoginService.js";
import ValidationService from "./Validation/ValidationService.js";
import AuthenticationService from "./Authentication/AuthenticationService.js";
import {UserModel} from "../../../model/Users/schemas/Users.js";
import {User} from "../../../interfaces/Users/index.js";
import AuthenticationService2 from "./Authentication/AuthenticationService2.js";

export default class UserLoginService extends AbstractLoginService {
    validationService
    authenticationService
    constructor() {
        super();
        this.validationService = new ValidationService(UserModel)
        this.authenticationService = new AuthenticationService()
    }
}
