import ILoginService from "../LoginService/index.js";
export default interface ILoginController<T> {
    loginService: ILoginService<T>;
}
