import { Router } from 'express';
import { UserController } from "../../controllers/UserController/index.js";
import { UsersServices } from "../../services/UsersServices/index.js";
import { UsersRepository } from "../../db/mongo/repositories/users.js";
const userRouter = Router();
import { UserModel } from "../../db/mongo/schemas/Users.js";
const usersRepository = new UsersRepository(UserModel);
const usersServices = new UsersServices(usersRepository);
const usersController = new UserController(usersServices);
const getUsers = async (req, res) => {
    const response = await usersController.getUsers(req, res);
    res.json(response);
};
userRouter.get('/users', getUsers);
export default userRouter;
//# sourceMappingURL=index.js.map