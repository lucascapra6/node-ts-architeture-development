export class UserController {
    constructor(userServices) {
        this.usersServices = userServices;
    }
    async getUsers(req, res) {
        return await this.usersServices.getUsers();
    }
}
//# sourceMappingURL=index.js.map