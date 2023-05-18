import {UserModel} from "./schemas/Users.js";
import {IUsersRepositoryHandler} from "../../interfaces/Users/UsersRepository/index.js";
import {User, Users} from "../../interfaces/Users/index.js";
export class UsersRepositoryHandler implements IUsersRepositoryHandler{
    public model;
    constructor(model: typeof UserModel) {
        this.model = model
    }
    async getUsers(): Promise<Users> {
        return this.model.find()
    }
    async insertUser(user:User): Promise<User> {
        return this.model.create(user)
    }
    async updateUser(userId: string, newUserData: Users){
        return this.model.findByIdAndUpdate(userId, newUserData, {new: true})
    }
    async findLastUserCreatedId(): Promise<unknown> {
        return this.model.findOne({}).sort('-id')
    }
    async findUserByNickname(nickname:string): Promise<unknown | User> {
        return this.model.findOne({nickName: nickname})
    }
}
