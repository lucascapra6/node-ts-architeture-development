import express, {NextFunction, Request, Response, Router} from 'express';
import LoginController from "../../controllers/LoginController/index.js";
import {IUsersCredentials} from "../../interfaces/Login/IUsersCredentials/index.js";
import UserLoginService from "../../services/Login/InternalAuth/UserLoginService.js";
import RefreshTokenService from "../../services/Login/InternalAuth/RefreshToken/index.js";
const loginRouter = Router()
const loginController = new LoginController(new UserLoginService(), new RefreshTokenService())
const doLogin = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {nickName, password} = req.body
        const response = await loginController.handleLogin({nickName, password})
        return res.status(response.status).json(response)
    } catch (e: any) {
        next(e)
    }
}
const refreshToken = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {id, role, refreshToken} = req.body
        const response = await loginController.handleRefreshToken(id, role, refreshToken)
        return res.status(200).json(response)
    } catch (e: any) {
        next(e)
    }
}

loginRouter.post('/login', doLogin)
loginRouter.post('/refreshToken', refreshToken)

export default loginRouter
