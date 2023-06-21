import fs from "fs";
import express, { Request, Response, Application } from "express";
import https from "https";
import dotenv from 'dotenv'
import {mongoHelper} from "./helpers/MongoDb/index.js";
import cors from "cors";
import api from './api.js'
import helmet from "helmet";
import passport from 'passport';
import {Strategy, StrategyOptionsWithRequest} from "passport-google-oauth20";
import oAuthLogin, {verifyCallback} from "./services/Login/OAuth/OAuth.js";
import cookieSession from 'cookie-session'
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
    app.use(helmet())
    app.use(cookieSession({
        name:'session',
        maxAge: 1000 * 60,
        keys:[process.env.COOKIE_KEY1 as string, process.env.COOKIE_KEY2 as string]
    }))
    app.use(cors())
    app.use(express.json()) //middleware do express que faz o parse da request
    app.get("/v1/health", (req: Request, res: Response) => {
        res.send("UP");
    });
    const AUTH_OPTIONS = {
        callbackURL:'/v1/auth/google/callback',
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET
    } as StrategyOptionsWithRequest

    app.use(passport.initialize())
    app.use(passport.session())
    passport.use(<passport.Strategy>new Strategy(AUTH_OPTIONS, verifyCallback))
    //save the session to the cookie
    passport.serializeUser((user, done) => {
        done(null, user)
    })

    //read the session from the cookie
    passport.deserializeUser((user: any, done) => {
        done(null, user)
    })
    //routes
    app.use('/v1', api)
    app.use('/v1', oAuthLogin)


    return app
}

export default createServer
