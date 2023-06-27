import cookieSession from "cookie-session";

export default function configureCookieSession() {
    return cookieSession({
        name: 'session',
        maxAge: 10000 * 60,
        keys: [process.env.COOKIE_KEY1 as string, process.env.COOKIE_KEY2 as string],
    });
}
