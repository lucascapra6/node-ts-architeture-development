import { Request, Response, NextFunction, Router } from 'express';
import {UserController} from "../../controllers/UserController/index.js";
import {UsersRepositoryHandler} from "../../model/Users/UsersRepositoryHandler.js";
const userRouter = Router();
import {UserModel} from "../../model/Users/schemas/Users.js";
import {checkAdminLoggedIn, checkUserLoggedIn} from "../../middlewares/CheckLoggedIn/index.js";

const usersRepository = new UsersRepositoryHandler(UserModel)
const usersController = new UserController(usersRepository);

const getUsers = async (req: Request, res: Response, next: NextFunction) => {
    await usersController.getUsers(req, res, next)
}
const insertUser = async (req: Request, res: Response, next: NextFunction) => {
    await usersController.insertUser(req, res, next)
}
const updateUser = async (req: Request, res: Response, next: NextFunction) => {
    const response = await usersController.updateUser(req, res, next)
    res.json(response)
}

userRouter.get('/users', checkUserLoggedIn, getUsers);
userRouter.post('/register', checkAdminLoggedIn, insertUser)
userRouter.put('/updateUser', checkAdminLoggedIn, updateUser)

export default userRouter;
