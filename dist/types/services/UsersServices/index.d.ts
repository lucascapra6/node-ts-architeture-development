import { IUsersRepository } from "../../interfaces/Users/UsersRepository/index.js";
import { IUsersServices } from "../../interfaces/Users/UsersServices/index.js";
import { Users } from "../../interfaces/Users/index.js";
export declare class UsersServices implements IUsersServices {
    usersRepository: IUsersRepository;
    constructor(usersRepository: IUsersRepository);
    getUsers(): Promise<Users>;
    insertUser(user: Users): Promise<Users>;
}
