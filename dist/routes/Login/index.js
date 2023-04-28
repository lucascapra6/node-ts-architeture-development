import { Router } from 'express';
import LoginController from "../../controllers/LoginController/index.js";
import UserLoginService from "../../services/Login/UserLoginService.js";
const loginRouter = Router();
const loginController = new LoginController(new UserLoginService());
const doLogin = async (req, res) => {
    const { email, password } = req.body;
    const response = await loginController.handleLogin({ email, password });
    return res.json(response);
};
const verifyRequest = (req, res, next) => {
    try {
        if (!req.body.email || !req.body.password) {
            throw new Error('Parametro invalido');
        }
        next();
    }
    catch (e) {
        res.status(500);
    }
};
loginRouter.post('/login', doLogin);
export default loginRouter;
//# sourceMappingURL=index.js.map