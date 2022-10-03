import { Router } from "express";
import TestController from "../controllers/test.controller";
import TestValidations from "../validations/test.validations";

export default class TestRouter {

    /**
     * Router controller
     */
    private controller:TestController;

    /**
     * Params validator
     */
    private validator:TestValidations;
    
    /**
     * Testing Router
     */
    private router:Router;
    
    constructor(){
        this.controller = new TestController();

        this.validator = new TestValidations();

        this.router = Router();

        this.router.get('/', this.controller.listTests);
        this.router.get('/:id', this.validator.validateId, this.controller.listTest);
        this.router.post('/', this.validator.validatePost, this.controller.createTest);
        this.router.put('/:id', this.validator.validatePut, this.controller.updateTest);
        this.router.delete('/:id', this.validator.validateId, this.controller.deleteTest); 
    }

    /**
     * This method returns the configurated router.
     * @returns Testing Router
     */
    getRouter(){
        return this.router;
    }
}