import {User} from "../../Users/index.js";

export interface IAuthenticationService<T> {
    signJwt(user: T): string
    verifyJwt(token: string, tokenKey: string): any
}
