import { Router } from "express";
import NewsController from "../controllers/news.controller";
import NewsValidations from "../validations/news.validations";


export default class NewsRoutes{

    private controller: NewsController;
    private router: Router; 
    private validation: NewsValidations;

    constructor(){
        this.controller = new NewsController();
        this.validation = new NewsValidations();
        this.router = Router();

        this.router.post("/",this.validation.validForm ,this.controller.createNews);
        this.router.put("/",this.validation.validForm ,this.controller.updateNews);
        this.router.delete("/:id",this.validation.validId,this.controller.deletedNews);
        this.router.get("/", this.controller.getAllNews);
        this.router.get("/:id",this.validation.validId,this.controller.getNewsByid);
    }

    getRouter(){
        return this.router;
    }



}