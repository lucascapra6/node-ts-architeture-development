import IValidationService from "../../../interfaces/Login/ValidationService/index.js";
import {IUsersCredentials} from "../../../interfaces/Login/IUsersCredentials/index.js";
import {UserModel} from "../../../model/Users/schemas/Users.js";
import {User} from "../../../interfaces/Users/index.js";
import bcrypt from "bcrypt";

//responsavel por ir no banco de dados e fazer a validação
export default class ValidationService implements IValidationService {
    userRepository
    constructor(userRepository: typeof UserModel) {
        this.userRepository = userRepository
    }
    async validate(userCredentials: IUsersCredentials): Promise<boolean | User> {
        const password = userCredentials.password
        const user = await this.userRepository.findOne({nickName: userCredentials.nickName})
        if(!(user && await bcrypt.compare(password, user.password))) return false
        return user
    }
}
