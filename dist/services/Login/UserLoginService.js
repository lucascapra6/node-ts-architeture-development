import AbstractLoginService from "./AbstractLoginService.js";
import ValidationService from "./ValidationService.js";
import AuthenticationService from "./AuthenticationService.js";
export default class UserLoginService extends AbstractLoginService {
    constructor() {
        super();
        this.validationService = new ValidationService();
        this.authenticationService = new AuthenticationService();
    }
    callLoginService(userCredentials) {
        return this.validationService.validate(userCredentials);
    }
}
//# sourceMappingURL=UserLoginService.js.map