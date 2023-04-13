export default interface ILoginService<T> {
    validationService: any;
    authenticationService: any;
    callLoginService: (userCredentials: T) => void;
}
