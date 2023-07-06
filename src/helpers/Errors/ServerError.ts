export default class ServerError extends Error {
    private code: number;
    constructor(code: number, message: string) {
        super(message || 'Erro interno');
        this.code = code;
    }
}
