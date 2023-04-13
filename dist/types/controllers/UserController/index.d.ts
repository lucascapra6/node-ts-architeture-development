import { Request, Response } from 'express';
import { IUserController } from "../../interfaces/Users/UserController/index.js";
import { IUsersRepository } from "../../interfaces/Users/UsersRepository/index.js";
export declare class UserController implements IUserController {
    readonly usersRepository: IUsersRepository;
    constructor(usersRepository: IUsersRepository);
    getUsers(req: Request, res: Response): Promise<import("../../interfaces/Users/index.js").Users | {
        error: boolean;
        message: string;
    }>;
    insertUser(req: Request, res: Response): Promise<import("../../interfaces/Users/index.js").Users | {
        error: boolean;
        message: string;
    }>;
}
