import {IUsersRepositoryHandler} from "../UsersRepository/index.js";
import {User, Users} from "../index.js";

export interface IMongoUsersServices {
    usersRepository: IUsersRepositoryHandler
    getUsers() : Promise<Users>
    insertUser(user: User): Promise<User>
}
