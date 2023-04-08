import userRouter from "./routes/Users/index.js";
import loginRouter from "./routes/Login/index.js";
import createServer from "./app.js";
import { mongoHelper } from "./helpers/MongoDb/index.js";
const startServer = async () => {
    const app = await createServer();
    mongoHelper.connect();
    app.use(userRouter);
    app.use(loginRouter);
};
startServer();
//# sourceMappingURL=index.js.map