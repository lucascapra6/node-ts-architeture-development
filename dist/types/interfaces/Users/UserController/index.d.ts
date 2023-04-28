import { Request, Response } from "express";
import { Users } from "../index.js";
import { IUsersRepositoryHandler } from "../UsersRepository/index.js";
export interface IUserController {
    usersRepositoryHandler: IUsersRepositoryHandler;
    getUsers(req: Request, res: Response): Promise<Users | {
        error: boolean;
        message: unknown;
    }>;
    insertUser(req: Request, res: Response): Promise<Users | {
        error: boolean;
        message: unknown;
    }>;
}
