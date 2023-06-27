import {User} from "../../Users/index.js";

export interface IAuthenticationService {
    authenticate(user: User): string
}
