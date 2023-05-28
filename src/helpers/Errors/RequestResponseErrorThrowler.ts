export default class RequestResponseErrorThrowler extends Error {
    public statusCode: number;
    public success: boolean;
    public data: any;

    constructor(statusCode: number, message: string, data?: unknown) {
        super(message);
        this.statusCode = statusCode;
        this.success = false
        this.data = data;
    }
}

