import {UserModel} from "../../../db/mongo/schemas/Users.js";
import {Users} from "../index.js";

export interface IUsersRepository {
    model: typeof UserModel
    getUsers(): Promise<Users>
}
