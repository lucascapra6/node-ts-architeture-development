import express from "express";
import dotenv from 'dotenv';
import userRouter from "./routes/Users/index.js";
import { mongoHelper } from "./helpers/MongoDb/index.js";
import cors from "cors";
import loginRouter from "./routes/Login/index.js";
const createServer = () => {
    dotenv.config();
    const app = express();
    mongoHelper.connect();
    app.use(cors());
    app.use(express.json()); //middleware do express que faz o parse da request
    const port = process.env.PORT || 3001;
    app.get("/health", (req, res) => {
        res.send("UP");
    });
    app.use(userRouter);
    app.use(loginRouter);
    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    });
    return app;
};
export default createServer;
//# sourceMappingURL=app.js.map