import { ErrorHandler } from "../../helpers/Errors/index.js";
const errorHandler = new ErrorHandler();
export class UserController {
    constructor(userServices) {
        this.usersServices = userServices;
    }
    async getUsers(req, res) {
        try {
            return await this.usersServices.getUsers();
        }
        catch (error) {
            return errorHandler.serverError(error);
        }
    }
    async insertUser(req, res) {
        const user = req.body;
        try {
            return await this.usersServices.insertUser(user);
        }
        catch (error) {
            return errorHandler.serverError(error);
        }
    }
}
//# sourceMappingURL=index.js.map