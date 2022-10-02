import { Router } from "express";
import NewsController from "../controllers/news.controller";

export default class NewsRoutes{

    private controller: NewsController;
    private router: Router; 

    constructor(){
        this.controller = new NewsController();
        this.router = Router();

        this.router.post("/", this.controller.createNews);
        this.router.put("/", this.controller.updateNews);
        this.router.delete("/:id", this.controller.deletedNews);
        this.router.get("/", this.controller.getAllNews);
        this.router.get("/:id", this.controller.getNewsByid);
    }

    getRouter(){
        return this.router;
    }



}