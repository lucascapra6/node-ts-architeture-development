import { IUsersRepository } from "../UsersRepository/index.js";
import { Users } from "../index.js";
export interface IUsersServices {
    getUsers(): Promise<Users>;
    usersRepository: IUsersRepository;
}
