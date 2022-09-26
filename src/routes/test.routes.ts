import { Router } from "express";
import TestController from "../controllers/test.controller";

export default class TestRouter {

    /**
     * Router controller
     */
    private controller:TestController;
    
    /**
     * Testing Router
     */
    private router:Router;
    
    constructor(){
        this.controller = new TestController();
        this.router = Router();

        this.router.get('/', this.controller.listTests);
        this.router.get('/:id', this.controller.listTest);
        this.router.post('/', this.controller.createTest);
    }

    /**
     * This method returns the configurated router.
     * @returns Testing Router
     */
    getRouter(){
        return this.router;
    }
}