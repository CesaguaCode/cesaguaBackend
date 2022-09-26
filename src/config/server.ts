import 'dotenv/config';
import express, { Application } from "express";
import cors from "cors";
import morgan from "morgan";

import TestRouter from '../routes/test';

export default class Server{

    private app: Application;
    private port: number;

    private testRouter: TestRouter;

    constructor(){
        this.port = parseInt(process.env.PORT || "");
        this.app = express();

        this.testRouter = new TestRouter();

        this.middlewares();
        this.routes();
    }

    private middlewares(){
        this.app.use(morgan("dev"));
        this.app.use(express.json({limit: "50mb"}));
        this.app.use(cors());
    }

    private routes(){
        this.app.use('/test', this.testRouter.router);
    }

    public launch(){
        this.app.listen(this.port, () => console.log("Running on port", this.port));
    }

}