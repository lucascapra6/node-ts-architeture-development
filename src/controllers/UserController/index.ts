import {Request, Response} from 'express';
import {UsersServices} from "../../services/UsersServices/index.js";
import {IUserController} from "../../interfaces/Users/UserController/index.js";
import {IUsersServices} from "../../interfaces/Users/UsersServices/index.js";

export class UserController implements IUserController{
    public readonly usersServices
    constructor(userServices: IUsersServices) {
        this.usersServices = userServices
    }
    async getUsers(req: Request, res: Response) {
        return await this.usersServices.getUsers()
    }
}
