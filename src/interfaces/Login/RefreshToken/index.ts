export default interface IRefreshTokenService {
    refreshToken(id: number, role: string ,token: string): {token: string, refreshedToken: string}
}
