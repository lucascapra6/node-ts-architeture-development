import express from "express";
import userRouter from "./routes/Users/index.js";
import loginRouter from "./routes/Login/index.js";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';


const api = express.Router()
api.get('/', (req, res) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename).replace('dist', '')
    res.sendFile(join(__dirname, 'src/views/home.html'))
})
api.use(userRouter)
api.use(loginRouter)

export default api
