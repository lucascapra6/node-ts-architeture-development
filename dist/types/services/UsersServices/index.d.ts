import { IUsersRepositoryHandler } from "../../interfaces/Users/UsersRepository/index.js";
import { IMongoUsersServices } from "../../interfaces/Users/UsersServices/index.js";
import { Users } from "../../interfaces/Users/index.js";
export declare class MongoUsersServices implements IMongoUsersServices {
    usersRepository: IUsersRepositoryHandler;
    constructor(usersRepository: IUsersRepositoryHandler);
    getUsers(): Promise<Users>;
    insertUser(user: Users): Promise<Users>;
}
