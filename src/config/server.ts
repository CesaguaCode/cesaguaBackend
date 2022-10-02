import "dotenv/config";
import express, { Application } from "express";
import cors from "cors";
import morgan from "morgan";

import TestRouter from "../routes/test.routes";
import NewsRoutes from "../routes/news.routes";

export default class Server {
  private app: Application;
  private port: number;

  private testRouter: TestRouter;
  private newsRoutes: NewsRoutes;

  constructor() {
    this.port = parseInt(process.env.PORT || "");
    this.app = express();

    this.testRouter = new TestRouter();
    this.newsRoutes = new NewsRoutes();

    this.middlewares();
    this.routes();
  }

  /**
   * This method configures the middlewares
   */
  private middlewares() {
    this.app.use(morgan("dev"));
    this.app.use(express.json({ limit: "0.5mb" }));
    this.app.use(cors());
  }

  /**
   * This method allows to set the routes
   */
  private routes() {
    this.app.use("/test", this.testRouter.getRouter());
    this.app.use("/news", this.newsRoutes.getRouter());
  }

  /**
   * This method launches the server
   */
  public launch() {
    this.app.listen(this.port, () => console.log("Running on port", this.port));
  }
}
