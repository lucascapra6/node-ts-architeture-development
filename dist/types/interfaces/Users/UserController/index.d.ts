import { Request, Response } from "express";
import { Users } from "../index.js";
import { IUsersServices } from "../UsersServices/index.js";
export interface IUserController {
    usersServices: IUsersServices;
    getUsers(req: Request, res: Response): Promise<Users | {
        error: boolean;
        message: unknown;
    }>;
    insertUser(req: Request, res: Response): Promise<Users | {
        error: boolean;
        message: unknown;
    }>;
}
