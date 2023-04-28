import {IUsersRepositoryHandler} from "../UsersRepository/index.js";
import {Users} from "../index.js";

export interface IMongoUsersServices {
    usersRepository: IUsersRepositoryHandler
    getUsers() : Promise<Users>
    insertUser(user: Users): Promise<Users>
}
