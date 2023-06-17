import {Router} from "express";
import passport from "passport";
import {Strategy, StrategyOptionsWithRequest} from "passport-google-oauth20";
import {Request, Response, NextFunction} from "express";
export function verifyCallback(accessToken: any, refreshToken:any, profile: any, done:any) {
    console.log(profile)
    done(null, profile)
}

const oAuthLoginRouter = Router()

oAuthLoginRouter.get('/auth/google', passport.authenticate('google', {
    scope: ['email', 'profile']
}))
oAuthLoginRouter.get('/auth/google/callback', passport.authenticate('google', {
    failureRedirect: '/failure',
    successRedirect: '/v1/users',
    session: false
}), () => {
    console.log('google called us back')
})

oAuthLoginRouter.get('/failure', (req, res) => {
    res.send('failure')
})

export function checkLoggedIn(req: Request, res: Response, next: NextFunction) {
    console.log('Current user is:', req.user);
    // const isLoggedIn = req.isAuthenticated() && req.user;
    const isLoggedIn = true
    if (!isLoggedIn) {
        return res.status(401).json({
            error: 'You must log in!',
        });
    }
    next();
}
export default oAuthLoginRouter
