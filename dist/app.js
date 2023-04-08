import express from "express";
import dotenv from 'dotenv';
import bodyParser from "body-parser";
const createServer = () => {
    dotenv.config();
    const app = express();
    const port = process.env.PORT || 3001;
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