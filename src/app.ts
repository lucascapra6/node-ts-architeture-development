import express, { Request, Response, Application } from "express";
import dotenv from 'dotenv'
import userRouter from "./routes/Users/index.js";
import {mongoHelper} from "./helpers/MongoDb/index.js";
import cors from "cors";
import loginRouter from "./routes/Login/index.js";
import api from './api.js'
const createServer = () : Application => {
    dotenv.config()
    const app = express();
    mongoHelper.connect()
    app.use(cors())
    app.use(express.json()) //middleware do express que faz o parse da request
    const port = process.env.PORT || 3001
    app.get("/health", (req: Request, res: Response) => {
        res.send("UP");
    });
    app.use('/v1', api)
    // app.use(userRouter)
    // app.use(loginRouter)
    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    });

    return app
}

export default createServer
