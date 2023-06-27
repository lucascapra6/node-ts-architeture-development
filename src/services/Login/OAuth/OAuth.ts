import {Router} from "express";
import passport from "passport";
import {Request, Response, NextFunction} from "express";
export function verifyCallback(accessToken: any, refreshToken:any, profile: any, done:any) {
    console.log('refresh token', refreshToken)
    done(null, profile)
}

const oAuthLoginRouter = Router()

oAuthLoginRouter.get('/auth/google', passport.authenticate('google', {
    scope: ['email', 'profile']
}))
oAuthLoginRouter.get('/auth/google/callback', passport.authenticate('google', {
    failureRedirect: '/failure',
    successRedirect: '/v1/users',
    session: true
}), () => {
    console.log('google called us back')
})

oAuthLoginRouter.get('/failure', (req, res) => {
    res.send('failure')
})

oAuthLoginRouter.get('/logout', (req, res) => {
    req.logout((done) => {
        console.log(done)
    })
    res.redirect('/v1')
})

export default oAuthLoginRouter
