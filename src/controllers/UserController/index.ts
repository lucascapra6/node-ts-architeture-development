import {Request, Response} from 'express';
import {IUserController} from "../../interfaces/Users/UserController/index.js";
import {ErrorHandler} from "../../helpers/Errors/index.js";
import {IUsersRepositoryHandler} from "../../interfaces/Users/UsersRepository/index.js";
const errorHandler = new ErrorHandler()

export class UserController implements IUserController{
    public readonly usersRepositoryHandler
    constructor(usersRepositoryHandler: IUsersRepositoryHandler) {
        this.usersRepositoryHandler = usersRepositoryHandler
    }
    async getUsers(req: Request, res: Response) {
        try {
            return await this.usersRepositoryHandler.getUsers()
        } catch (error) {
            return errorHandler.serverError(error)
        }
    }
    async insertUser(req: Request, res: Response) {
        const user = req.body
        try {
            return await this.usersRepositoryHandler.insertUser(user)
        } catch (error) {
            return errorHandler.serverError(error)
        }
    }
    async updateUser(req: Request, res: Response) {
        const {userId, newUserData}= req.body
        try {
            return await this.usersRepositoryHandler.updateUser(userId, newUserData)
        } catch (error) {
            return errorHandler.serverError(error)
        }
    }
}
