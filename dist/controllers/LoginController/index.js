class LoginController {
    constructor(loginService) {
        this.loginService = loginService;
    }
    handleLogin(userCredentials) {
        return this.loginService.callLoginService(userCredentials);
    }
}
export default LoginController;
//# sourceMappingURL=index.js.map