import express from "express";
import userRouter from "./routes/Users/index.js";
import loginRouter from "./routes/Login/index.js";

const api = express.Router()
api.use(userRouter)
api.use(loginRouter)

export default api
