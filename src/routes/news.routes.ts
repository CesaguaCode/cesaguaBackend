import { Router } from "express";
import NewsController from "../controllers/news.controller";

export default class NewsRoutes{

    private controller: NewsController;
    private router: Router; 

    constructor(){
        this.controller = new NewsController();
        this.router = Router();

        //llamar las rutas

       // this.router.get('/', this.controller.metodo);
    }

    getRouter(){
        return this.router;
    }



}