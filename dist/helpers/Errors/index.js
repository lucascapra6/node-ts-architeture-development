export class ErrorHandler extends Error {
    serverError(error) {
        let errorMessage = "Failed to do something exceptional";
        if (error instanceof Error) {
            errorMessage = error.message;
            return {
                error: true,
                message: errorMessage
            };
        }
        return {
            error: true,
            message: errorMessage
        };
    }
}
//# sourceMappingURL=index.js.map