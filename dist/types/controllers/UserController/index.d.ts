import { Request, Response } from 'express';
import { IUserController } from "../../interfaces/Users/UserController/index.js";
import { IUsersRepositoryHandler } from "../../interfaces/Users/UsersRepository/index.js";
export declare class UserController implements IUserController {
    readonly usersRepositoryHandler: IUsersRepositoryHandler;
    constructor(usersRepositoryHandler: IUsersRepositoryHandler);
    getUsers(req: Request, res: Response): Promise<import("../../interfaces/Users/index.js").Users | {
        error: boolean;
        message: string;
    }>;
    insertUser(req: Request, res: Response): Promise<import("../../interfaces/Users/index.js").Users | {
        error: boolean;
        message: string;
    }>;
}
