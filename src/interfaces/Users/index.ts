export type Users = {password: string, name: string, nickName: string, lastName: string, id?: number, role: 'admin' | 'user'}[]
export type User = {password: string, name: string, nickName: string, lastName: string, id?: number, role: 'admin' | 'user'}

export type JwtUserSign = {
    id: number | undefined,
    nickName: string | undefined
    role: 'admin' | 'user'| undefined
}
