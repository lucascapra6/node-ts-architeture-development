import {IUsersRepository} from "../../interfaces/Users/UsersRepository/index.js";
import {IMongoUsersServices} from "../../interfaces/Users/UsersServices/index.js";
import {Users} from "../../interfaces/Users/index.js";
export class MongoUsersServices implements IMongoUsersServices{
    public usersRepository;

    constructor(usersRepository: IUsersRepository) {
        this.usersRepository = usersRepository
    }
    public getUsers() {
        return this.usersRepository.getUsers()
    }
    public insertUser(user: Users) {
        return this.usersRepository.insertUser(user)
    }
}

