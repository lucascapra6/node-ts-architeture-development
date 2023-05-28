import {Request, Response} from 'express';
import {IUserController} from "../../interfaces/Users/UserController/index.js";
import {ErrorHandler} from "../../helpers/Errors/index.js";
import {IUsersRepositoryHandler} from "../../interfaces/Users/UsersRepository/index.js";
import {User, Users} from "../../interfaces/Users/index.js";
import {getPagination, GetPaginationQueryParams} from "../../services/Query/query.js";
import RequestErrorHandler from "../../helpers/Errors/RequestErrorHandler.js";
import RequestResponseErrorThrowler from "../../helpers/Errors/RequestResponseErrorThrowler.js";
import {RequestResponseError} from "../../types/Error.js";
const errorHandler = new ErrorHandler()

export class UserController implements IUserController{
    public readonly usersRepositoryHandler
    constructor(usersRepositoryHandler: IUsersRepositoryHandler) {
        this.usersRepositoryHandler = usersRepositoryHandler
    }
    async getUsers(req?: Request, res?: Response) {
        let skipParam = 0;
        let limitParam = 0;
        try {
            if (req) {
                const query = req.query as unknown as GetPaginationQueryParams
                const {skip, limit} = getPagination(query)
                skipParam = skip
                limitParam = limit
            }
            return await this.usersRepositoryHandler.getUsers(skipParam, limitParam)
        } catch (error) {
            res?.status(500).json(errorHandler.serverError(error))
            return errorHandler.serverError(error)
        }
    }
    async insertUser(req: Request, res: Response) {
        try {
            const user = req.body;
            const userNickname = await this.findUserByNickname(user.nickName);
            if (userNickname) {
                throw new RequestResponseErrorThrowler(409, 'Usuário já registrado no sistema.');
            }
            const userWithId = await this.insertUserId(user) as User;
            const response = await this.usersRepositoryHandler.insertUser(userWithId);
            res.json(response);
        } catch (error: any) {
            if (error instanceof RequestResponseErrorThrowler) {
                new RequestErrorHandler(res).sendError(error)
                return false
            }
            res.status(500).json({success: false, data: error.message || [], message: 'Internal server error'});
        }
    }
    async insertUserId(user: User) {
        const users = await this.getUsers() as Users
        const lastUserCreated = await this.usersRepositoryHandler.findLastUserCreatedId() as User
        if(users.length === 0) {
            const FIRST_ID = 1
            return {
                ...user,
                id: Number(FIRST_ID)
            }
        }
        return {
            ...user,
            id: Number(lastUserCreated.id) + 1
        }
    }
    async updateUser(req: Request, res: Response) {
        const {userId, newUserData}= req.body
        try {
            return await this.usersRepositoryHandler.updateUser(userId, newUserData)
        } catch (error) {
            return errorHandler.serverError(error)
        }
    }
    async findUserByNickname(nickname:string) {
        return this.usersRepositoryHandler.findUserByNickname(nickname)
    }
}
