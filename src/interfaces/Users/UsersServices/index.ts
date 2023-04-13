import {IUsersRepository} from "../UsersRepository/index.js";
import {Users} from "../index.js";

export interface IMongoUsersServices {
    usersRepository: IUsersRepository
    getUsers() : Promise<Users>
    insertUser(user: Users): Promise<Users>
}
