import { Request, Response } from "express";
import { Users } from "../index.js";
import { IUsersRepository } from "../UsersRepository/index.js";
export interface IUserController {
    usersRepository: IUsersRepository;
    getUsers(req: Request, res: Response): Promise<Users | {
        error: boolean;
        message: unknown;
    }>;
    insertUser(req: Request, res: Response): Promise<Users | {
        error: boolean;
        message: unknown;
    }>;
}
