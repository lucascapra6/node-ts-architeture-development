import {UserModel} from "../../../model/Users/schemas/Users.js";
import {User, Users} from "../index.js";
export interface IUsersRepositoryHandler {
    model: typeof UserModel
    getUsers(): Promise<Users>
    insertUser(user: User): Promise<User>
    updateUser(userId: string, newUserData: Users): any
    findLastUserCreatedId(): Promise<unknown>
    findUserByNickname(nickname: string): Promise<unknown | User>
}
