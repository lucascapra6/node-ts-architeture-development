import IRefreshTokenService from "../../../../interfaces/Login/RefreshToken/index.js";
import AuthenticationService from "../Authentication/AuthenticationService.js";
import ServerError from "../../../../helpers/Errors/ServerError.js";

export default class RefreshTokenService implements IRefreshTokenService{
    refreshToken(id: number, role: string, token: string) {
        const authenticationService = new AuthenticationService()
        const decoded = authenticationService.verifyJwt(token, process.env.JWT_REFRESH_TOKEN_KEY as string) as {nickName: string}
        if(!decoded) throw new ServerError(403, 'invalid token')
        const userDecoded = {
            nickName: decoded.nickName,
            id: id,
            role: role as 'user' | 'admin'
        }
        const {jwtToken, refreshToken} = authenticationService.signJwt(userDecoded)
        return {token: jwtToken, refreshedToken: refreshToken}
    }
}
