import ILoginService from "../../../interfaces/Login/LoginService/index.js";
import IValidationService from "../../../interfaces/Login/ValidationService/index.js";
import ValidationService from "./ValidationService.js";

export default abstract class AbstractLoginService<T> implements ILoginService<T>{
    abstract authenticationService: any
    abstract validationService: IValidationService<T>

    abstract callLoginService(userCredentials:T): void
}
