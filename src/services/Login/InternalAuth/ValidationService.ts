import IValidationService from "../../../interfaces/Login/ValidationService/index.js";
import {IUsersCredentials} from "../../../interfaces/Login/IUsersCredentials/index.js";

export default class ValidationService <T> implements IValidationService<T>{
    validate(body: T): boolean {
        return true
    }
}
