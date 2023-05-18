import {Request, Response} from "express";
import {User, Users} from "../index.js";
import {IMongoUsersServices} from "../UsersServices/index.js";
import {IUsersRepositoryHandler} from "../UsersRepository/index.js";
export interface IUserController {
    usersRepositoryHandler: IUsersRepositoryHandler
    getUsers(req: Request, res: Response): Promise<Users | { error: boolean, message: unknown }>;
    insertUser(req: Request, res: Response): void;
    insertUserId(user:User): Promise<User>
    findUserByNickname(nickname: string): Promise<unknown>
}
