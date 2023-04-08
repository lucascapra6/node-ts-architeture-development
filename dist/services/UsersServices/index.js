export class UsersServices {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    getUsers() {
        return this.usersRepository.getUsers();
    }
}
//# sourceMappingURL=index.js.map