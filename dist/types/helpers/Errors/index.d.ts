export declare class ErrorHandler extends Error {
    serverError(error: unknown): {
        error: boolean;
        message: string;
    };
}
