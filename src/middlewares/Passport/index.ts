import {Strategy, StrategyOptions, StrategyOptionsWithRequest} from "passport-google-oauth20";
import {DeserializeUserFunction} from "passport"
import passport from "passport";
import {verifyCallback} from "../../services/Login/OAuth/OAuth.js";
import refresh from "passport-oauth2-refresh";

export function configurePassportStrategy() {
    const AUTH_OPTIONS = {
        callbackURL:'/v1/auth/google/callback',
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET
    } as StrategyOptionsWithRequest
    const strategy = new Strategy(AUTH_OPTIONS, verifyCallback)
    return passport.use(<passport.Strategy> strategy)
}

export function configureSerializeUser() {
    //save the session to the cookie
    return passport.serializeUser((user: any, done) => {
        console.log('serialized user', user)
        done(null, user.id)
    })
}
export function configureDeserializeUser() {
//read the session from the cookie
    return passport.deserializeUser((user: any, done) => {
        console.log('deserialize', user)
        done(null, user)
    })
}

