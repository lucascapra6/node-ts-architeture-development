import { Request, Response, NextFunction, Router } from 'express';
import {UserController} from "../../controllers/UserController/index.js";
import {UsersRepositoryHandler} from "../../model/Users/UsersRepositoryHandler.js";
const userRouter = Router();
import {UserModel} from "../../model/Users/schemas/Users.js";

const usersRepository = new UsersRepositoryHandler(UserModel)
const usersController = new UserController(usersRepository);

const getUsers = async (req: Request, res: Response) => {
    const response = await usersController.getUsers(req, res)
    res.json(response)
}
const insertUser = async (req: Request, res: Response) => {
    await usersController.insertUser(req, res)
}
const updateUser = async (req: Request, res: Response) => {
    const response = await usersController.updateUser(req, res)
    res.json(response)
}

userRouter.get('/users', getUsers);
userRouter.post('/insertUser', insertUser)
userRouter.put('/updateUser', updateUser)

export default userRouter;
