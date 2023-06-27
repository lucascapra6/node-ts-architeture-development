import fs from "fs";
import express, { Request, Response, Application } from "express";
import https from "https";
import dotenv from 'dotenv'
import {mongoHelper} from "./helpers/MongoDb/index.js";
import api from './api.js'
import oAuthLogin, {verifyCallback} from "./services/Login/OAuth/OAuth.js";
import MiddlewaresHandler from "./middlewares/MiddlewaresHandler.js";
import refresh from 'passport-oauth2-refresh'
const createServer = () : Application => {
    dotenv.config()
    const app = express();
    mongoHelper.connect()
    const port = process.env.PORT || 3001
    https.createServer({
        key:fs.readFileSync('key.pem'),
        cert:fs.readFileSync('cert.pem')
    }, app).listen(port, () => {
        console.log(`Server running at https://localhost:${port}/v1`);
    });
    //middlewares
    new MiddlewaresHandler(app).load()

    //routes
    app.get("/v1/health", (req: Request, res: Response) => {
        res.send("UP");
    });
    app.use('/v1', api)
    app.use('/v1', oAuthLogin)
    return app
}

export default createServer
