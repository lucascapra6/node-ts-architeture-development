import express, { Request, Response, Application } from "express";
import dotenv from 'dotenv'

const createServer = () : Application => {
    dotenv.config()
    const app = express();
    const port = process.env.PORT || 3001
    app.use(express.json()) //middleware do express que faz o parse da request


    app.get("/health", (req: Request, res: Response) => {
        res.send("UP");
    });

    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    });

    return app
}


export default createServer
