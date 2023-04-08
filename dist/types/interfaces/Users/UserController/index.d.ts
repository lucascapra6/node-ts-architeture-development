import { Request, Response } from "express";
import { UsersServices } from "../../../services/UsersServices/index.js";
import { Users } from "../index.js";
export interface IUserController {
    usersServices: UsersServices;
    getUsers(req: Request, res: Response): Promise<Users>;
}
