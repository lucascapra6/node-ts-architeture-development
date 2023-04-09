import {Request, Response} from 'express';
import {UsersServices} from "../../services/UsersServices/index.js";
import {IUserController} from "../../interfaces/Users/UserController/index.js";
import {IUsersServices} from "../../interfaces/Users/UsersServices/index.js";
import {ErrorHandler} from "../../helpers/Errors/index.js";
const errorHandler = new ErrorHandler()

export class UserController implements IUserController{
    public readonly usersServices
    constructor(userServices: IUsersServices) {
        this.usersServices = userServices
    }
    async getUsers(req: Request, res: Response) {
        try {
            return await this.usersServices.getUsers()
        } catch (error) {
            return errorHandler.serverError(error)
        }
    }
    async insertUser(req: Request, res: Response) {
        const user = req.body
        try {
            return await this.usersServices.insertUser(user)
        } catch (error) {
            return errorHandler.serverError(error)
        }
    }
}
