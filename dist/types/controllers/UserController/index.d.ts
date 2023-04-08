import { Request, Response } from 'express';
import { UsersServices } from "../../services/UsersServices/index.js";
import { IUserController } from "../../interfaces/Users/UserController/index.js";
export declare class UserController implements IUserController {
    readonly usersServices: UsersServices;
    constructor(userServices: UsersServices);
    getUsers(req: Request, res: Response): Promise<import("../../interfaces/Users/index.js").Users>;
}
