import { ErrorHandler } from "../../helpers/Errors/index.js";
const errorHandler = new ErrorHandler();
export class UserController {
    constructor(usersRepositoryHandler) {
        this.usersRepositoryHandler = usersRepositoryHandler;
    }
    async getUsers(req, res) {
        try {
            return await this.usersRepositoryHandler.getUsers();
        }
        catch (error) {
            return errorHandler.serverError(error);
        }
    }
    async insertUser(req, res) {
        const user = req.body;
        try {
            return await this.usersRepositoryHandler.insertUser(user);
        }
        catch (error) {
            return errorHandler.serverError(error);
        }
    }
}
//# sourceMappingURL=index.js.map