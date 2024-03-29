import "dotenv/config";
import express, { Application } from "express";
import cors from "cors";
import morgan from "morgan";

import NewsRoutes from "../routes/news.routes";
import UserRoutes from "../routes/users.routes";
import OrganizationPersonRoutes from "../routes/orgperson.routes";
import PinRouter from "../routes/pins.routes";
import ServiceRouter from "../routes/service.routes";
import MilestoneRouter from "../routes/milestone.routes";
import LoginRouter from "../routes/login.routes";

import swaggerDocs from "../v1/swagger";
import UtilsRouter from "../routes/utils.routes";

export default class Server {
  private app: Application;
  private port: number;

  private pinRouter: PinRouter;
  private newsRoutes: NewsRoutes;
  private userRoutes: UserRoutes;
  private organizationPerson: OrganizationPersonRoutes;
  private serviceRouter: ServiceRouter;
  private milestoneRouter: MilestoneRouter;
  private loginRouter: LoginRouter;
  private utilsRouter: UtilsRouter;

  constructor() {
    this.port = parseInt(process.env.PORT || "");
    this.app = express();
    this.middlewares();

    this.pinRouter = new PinRouter();
    this.newsRoutes = new NewsRoutes();
    this.userRoutes = new UserRoutes();
    this.organizationPerson = new OrganizationPersonRoutes();
    this.serviceRouter = new ServiceRouter();
    this.milestoneRouter = new MilestoneRouter();
    this.loginRouter = new LoginRouter();
    this.utilsRouter = new UtilsRouter();

    this.routes();
  }

  /**
   * This method configures the middlewares
   */
  private middlewares() {
    this.app.use(morgan("dev"));
    this.app.use(express.json({ limit: "1mb" }));
    this.app.use(cors());
  }

  /**
   * This method allows to set the routes
   */
  private routes() {
    this.app.use("/news", this.newsRoutes.getRouter());
    this.app.use("/users", this.userRoutes.getRouter());
    this.app.use("/person", this.organizationPerson.getRouter());
    this.app.use("/pin", this.pinRouter.getRouter());
    this.app.use("/service", this.serviceRouter.getRouter());
    this.app.use("/milestone", this.milestoneRouter.getRouter());
    this.app.use("/login", this.loginRouter.getRouter());
    this.app.use("/utils", this.utilsRouter.getRouter());
  }

  /**
   * This method launches the server
   */
  public launch() {
    this.app.listen(this.port, () => {
      console.log("🚀Backend running on port", this.port)
      swaggerDocs(this.app, this.port)
    });
  }
}
