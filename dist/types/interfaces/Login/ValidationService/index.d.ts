export default interface IValidationService<T> {
    validate(body: T): boolean;
}
