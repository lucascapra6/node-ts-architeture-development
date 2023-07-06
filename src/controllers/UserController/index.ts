import {NextFunction, Request, Response} from 'express';
import {IUserController} from "../../interfaces/Users/UserController/index.js";
import {IUsersRepositoryHandler} from "../../interfaces/Users/UsersRepository/index.js";
import {User, Users} from "../../interfaces/Users/index.js";
import {getPagination, GetPaginationQueryParams} from "../../services/Query/query.js";
import bcrypt from 'bcrypt'
import ServerError from "../../helpers/Errors/ServerError.js";
export class UserController implements IUserController{
    public readonly usersRepositoryHandler
    constructor(usersRepositoryHandler: IUsersRepositoryHandler) {
        this.usersRepositoryHandler = usersRepositoryHandler
    }
    async getUsers(req?: Request, res?: Response, next?: NextFunction) {
        let skipParam = 0;
        let limitParam = 0;
        try {
            if (req) {
                const query = req.query as unknown as GetPaginationQueryParams
                console.log(req.query)
                const {skip, limit} = getPagination(query)
                skipParam = skip
                limitParam = limit
            }
            const response = await this.usersRepositoryHandler.getUsers(skipParam, limitParam) as Users
            res?.status(200).json(response)
            return response
        } catch (error) {
            if (next) {
                next(error)
            }
            throw error
        }
    }
    async insertUser(req: Request, res: Response, next: NextFunction) {
        try {
            const user = req.body;
            const userNickname = await this.findUserByNickname(user.nickName);
            if (userNickname) {
                throw new ServerError(409, 'Usuário já registrado no sistema.');
            }
            const userWithId = await this.insertUserId(user) as User;
            const encryptedPassword = await bcrypt.hash(user.password, 10)
            const response = await this.usersRepositoryHandler.insertUser({...userWithId, password: encryptedPassword});
            res.status(200).json(response);
        } catch (error: any) {
            next(error)
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
    async updateUser(req: Request, res: Response, next: NextFunction) {
        const {userId, newUserData}= req.body
        try {
           await this.usersRepositoryHandler.updateUser(userId, newUserData)
        } catch (error) {
            next(error)
        }
    }
    async findUserByNickname(nickname:string) {
        return this.usersRepositoryHandler.findUserByNickname(nickname)
    }
}
