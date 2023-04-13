import {Request, Response} from 'express';
import {IUserController} from "../../interfaces/Users/UserController/index.js";
import {ErrorHandler} from "../../helpers/Errors/index.js";
import {IUsersRepository} from "../../interfaces/Users/UsersRepository/index.js";
const errorHandler = new ErrorHandler()

export class UserController implements IUserController{
    public readonly usersRepository
    constructor(usersRepository: IUsersRepository) {
        this.usersRepository = usersRepository
    }
    async getUsers(req: Request, res: Response) {
        try {
            return await this.usersRepository.getUsers()
        } catch (error) {
            return errorHandler.serverError(error)
        }
    }
    async insertUser(req: Request, res: Response) {
        const user = req.body
        try {
            return await this.usersRepository.insertUser(user)
        } catch (error) {
            return errorHandler.serverError(error)
        }
    }
}
