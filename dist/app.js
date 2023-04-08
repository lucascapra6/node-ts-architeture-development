import express from "express";
import * as dotenv from 'dotenv';
import bodyParser from "body-parser";
dotenv.config();
const createServer = () => {
    const app = express();
    const port = 3001;
    app.use(bodyParser.json());
    app.get("/health", (req, res) => {
        res.send("UP");
    });
    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    });
    return app;
};
export default createServer;
//# sourceMappingURL=app.js.map