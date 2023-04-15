import express, { Request, Response, Router } from 'express';
import LoginController from "../../controllers/LoginController/index.js";
import {IUsersCredentials} from "../../interfaces/Login/IUsersCredentials/index.js";
import UserLoginService from "../../services/Login/UserLoginService.js";
const loginRouter = Router()
const loginController = new LoginController<IUsersCredentials>(new UserLoginService<IUsersCredentials>())
const doLogin = async (req: Request, res: Response) => {
    const {email, password} = req.body
    const response = await loginController.handleLogin({email, password})
    return res.json(response)
}

loginRouter.post('/login', doLogin)

export default loginRouter
