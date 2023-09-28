import ILoginService from "../LoginService/index.js";
import IRefreshTokenService from "../RefreshToken/index.js";

export default interface ILoginController {
    loginService: ILoginService
    refreshTokenService: IRefreshTokenService
}
