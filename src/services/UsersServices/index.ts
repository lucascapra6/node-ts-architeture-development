import {IUsersRepository} from "../../interfaces/Users/UsersRepository/index.js";
import {IUsersServices} from "../../interfaces/Users/UsersServices/index.js";
export class UsersServices implements IUsersServices{
    public usersRepository;

    constructor(usersRepository: IUsersRepository) {
        this.usersRepository = usersRepository
    }
    public getUsers() {
        return this.usersRepository.getUsers()
    }
}

