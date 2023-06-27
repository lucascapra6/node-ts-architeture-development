import {IUsersCredentials} from "../IUsersCredentials/index.js";
import {User} from "../../Users/index.js";

export type LoginSucceed = {
    status: number,
    token: string,
    refreshToken: string,
    user: User
}

export type LoginFailed = {
    status: number,
    msg: string
}
export default interface ILoginService {
    callLoginService: (userCredentials: IUsersCredentials) => Promise<LoginSucceed | LoginFailed>
}
