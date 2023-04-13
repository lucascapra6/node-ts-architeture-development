export class MongoUsersServices {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    getUsers() {
        return this.usersRepository.getUsers();
    }
    insertUser(user) {
        return this.usersRepository.insertUser(user);
    }
}
//# sourceMappingURL=index.js.map