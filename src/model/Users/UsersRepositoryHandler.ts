import {UserModel} from "./schemas/Users.js";
import {IUsersRepositoryHandler} from "../../interfaces/Users/UsersRepository/index.js";
import {Users} from "../../interfaces/Users/index.js";
export class UsersRepositoryHandler implements IUsersRepositoryHandler{
    public model;
    constructor(model: typeof UserModel) {
        this.model = model
    }
    async getUsers() {
        return this.model.find()
    }
    async insertUser(user:Users) {
        return this.model.create(user)
    }
}
