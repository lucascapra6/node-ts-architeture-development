import express, { Request, Response, Application } from "express";
import * as dotenv from 'dotenv';
import bodyParser from "body-parser";
dotenv.config();

const createServer = () : Application => {
    const app = express();
    const port = 3001
    app.use(bodyParser.json())


    app.get("/health", (req: Request, res: Response) => {
        res.send("UP");
    });

    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    });

    return app
}


export default createServer
