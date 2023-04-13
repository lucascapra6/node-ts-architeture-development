import {Users} from "../index.js";

export interface AbstractUsersServices {
    usersRepository: unknown
    getUsers() : Promise<Users>
    insertUser(user: Users): Promise<Users>
}
