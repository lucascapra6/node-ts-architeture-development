import {IUsersCredentials} from "../IUsersCredentials/index.js";
import {UserModel} from "../../../model/Users/schemas/Users.js";
import {User} from "../../Users/index.js";

export default interface IValidationService {
    validate(userCredentials: IUsersCredentials): Promise<boolean | User>
}
