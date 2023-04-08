import { Router } from 'express';
import LoginController from "../../controllers/LoginController/index.js";
const loginRouter = Router();
const loginController = new LoginController();
const doLogin = (req, res) => {
    const { id, password } = req.body;
    loginController.authenticate({ id, password });
};
loginRouter.post('/login', doLogin);
export default loginRouter;
//# sourceMappingURL=index.js.map