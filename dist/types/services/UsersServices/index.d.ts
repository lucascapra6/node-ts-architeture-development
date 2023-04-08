import { IUsersRepository } from "../../interfaces/Users/UsersRepository/index.js";
import { IUsersServices } from "../../interfaces/Users/UsersServices/index.js";
export declare class UsersServices implements IUsersServices {
    usersRepository: IUsersRepository;
    constructor(usersRepository: IUsersRepository);
    getUsers(): Promise<import("../../interfaces/Users/index.js").Users>;
}
