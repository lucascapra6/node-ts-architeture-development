import {UserModel} from "../schemas/Users.js";
import {IUsersRepository} from "../../../interfaces/Users/UsersRepository/index.js";
export class UsersRepository implements IUsersRepository{
    public model;
    constructor(model: typeof UserModel) {
        this.model = model
    }
    async getUsers() {
        return this.model.find()
    }
}
