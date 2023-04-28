export class UsersRepositoryHandler {
    constructor(model) {
        this.model = model;
    }
    async getUsers() {
        return this.model.find();
    }
    async insertUser(user) {
        return this.model.create(user);
    }
}
//# sourceMappingURL=users.js.map