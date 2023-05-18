import {IUsersRepositoryHandler} from "../../interfaces/Users/UsersRepository/index.js";
import {IMongoUsersServices} from "../../interfaces/Users/UsersServices/index.js";
import {User, Users} from "../../interfaces/Users/index.js";
export class MongoUsersServices implements IMongoUsersServices{
    public usersRepository;

    constructor(usersRepository: IUsersRepositoryHandler) {
        this.usersRepository = usersRepository
    }
    public getUsers() {
        return this.usersRepository.getUsers()
    }
    public insertUser(user: User) {
        return this.usersRepository.insertUser(user)
    }
}

