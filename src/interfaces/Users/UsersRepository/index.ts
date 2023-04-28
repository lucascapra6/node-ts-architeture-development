import {UserModel} from "../../../model/schemas/Users.js";
import {Users} from "../index.js";
export interface IUsersRepositoryHandler {
    model: typeof UserModel
    getUsers(): Promise<Users>
    insertUser(user: Users): Promise<Users>
}
