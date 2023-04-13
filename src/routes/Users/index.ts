import { Request, Response, Router } from 'express';
import {UserController} from "../../controllers/UserController/index.js";
import {MongoUsersServices} from "../../services/UsersServices/index.js";
import {UsersRepository} from "../../db/mongo/repositories/users.js";
const userRouter = Router();
import {UserModel} from "../../db/mongo/schemas/Users.js";

const usersRepository = new UsersRepository(UserModel)
const usersController = new UserController(usersRepository);

const getUsers = async (req: Request, res: Response) => {
    const response = await usersController.getUsers(req, res)
    res.json(response)
}
const insertUser = async (req: Request, res: Response) => {
    const response = await usersController.insertUser(req, res)
    res.json(response)
}

userRouter.get('/users', getUsers);
userRouter.post('/user', insertUser)

export default userRouter;
