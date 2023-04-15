export default interface ILoginService<T> {
    callLoginService: (userCredentials: T) => void;
}
