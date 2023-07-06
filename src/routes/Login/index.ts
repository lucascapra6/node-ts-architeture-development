import express, {NextFunction, Request, Response, Router} from 'express';
import LoginController from "../../controllers/LoginController/index.js";
import {IUsersCredentials} from "../../interfaces/Login/IUsersCredentials/index.js";
import UserLoginService from "../../services/Login/InternalAuth/UserLoginService.js";
const loginRouter = Router()
const loginController = new LoginController(new UserLoginService())
const doLogin = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {nickName, password} = req.body
        const response = await loginController.handleLogin({nickName, password})
        return res.status(response.status).json(response)
    } catch (e: any) {
        next(e)
    }
}

loginRouter.post('/login', doLogin)

export default loginRouter
