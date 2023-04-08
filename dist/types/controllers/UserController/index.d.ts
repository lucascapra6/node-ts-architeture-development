import { Request, Response } from 'express';
import { IUserController } from "../../interfaces/Users/UserController/index.js";
import { IUsersServices } from "../../interfaces/Users/UsersServices/index.js";
export declare class UserController implements IUserController {
    readonly usersServices: IUsersServices;
    constructor(userServices: IUsersServices);
    getUsers(req: Request, res: Response): Promise<import("../../interfaces/Users/index.js").Users>;
}
