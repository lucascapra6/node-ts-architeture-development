import IValidationService from "../../interfaces/Login/ValidationService/index.js";
export default class ValidationService<T> implements IValidationService<T> {
    validate(body: T): boolean;
}
