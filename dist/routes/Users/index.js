import { Router } from 'express';
import { UserController } from "../../controllers/UserController/index.js";
import { UsersRepositoryHandler } from "../../model/Users/users.js";
const userRouter = Router();
import { UserModel } from "../../model/schemas/Users.js";
const usersRepository = new UsersRepositoryHandler(UserModel);
const usersController = new UserController(usersRepository);
const getUsers = async (req, res) => {
    const response = await usersController.getUsers(req, res);
    res.json(response);
};
const insertUser = async (req, res) => {
    const response = await usersController.insertUser(req, res);
    res.json(response);
};
userRouter.get('/users', getUsers);
userRouter.post('/user', insertUser);
export default userRouter;
//# sourceMappingURL=index.js.map