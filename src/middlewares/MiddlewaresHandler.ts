import express, {Express} from "express";
import helmet from "helmet";
import cors from "cors";
import configureCookieSession from "./CookieSession/index.js";
import passport from "passport";
import {configureDeserializeUser, configurePassportStrategy, configureSerializeUser} from "./Passport/index.js";

class MiddlewaresHandler {
    private server: Express;
    constructor(server: Express) {
        this.server = server
    }
    load() {
        this.server.use(helmet())
        this.server.use(configureCookieSession())
        this.server.use(cors())
        this.server.use(express.json()) //middleware do express que faz o parse da request
        this.server.use(passport.initialize())
        this.server.use(passport.session())
        configurePassportStrategy()
        configureSerializeUser()
        configureDeserializeUser()
    }
}

export default MiddlewaresHandler
