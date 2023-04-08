export class UsersRepository {
    constructor(model) {
        this.model = model;
    }
    async getUsers() {
        return this.model.find();
    }
}
//# sourceMappingURL=users.js.map