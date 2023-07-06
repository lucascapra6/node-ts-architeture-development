import {Response, Request, NextFunction} from "express";

export default (err:{code: number, message: string}, req: Request, res: Response, next:NextFunction) => {
    const { code, message } = err;
    res.status(code || 500).send({
        error: message,
    });
};
