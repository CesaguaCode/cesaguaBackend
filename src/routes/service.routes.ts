import { Router } from "express";

import ServiceController from "../controllers/service.controller";
import ServiceValidations from "../validations/service.validations";

export default class ServiceRouter {

    /**
     * Router controller
     */
    private controller:ServiceController;

    /**
     * Params validator
     */
    private validator:ServiceValidations;
    
    /**
     * Testing Router
     */
    private router:Router;
    
    constructor(){
        this.controller = new ServiceController();

        this.validator = new ServiceValidations();

        this.router = Router();

        this.router.get('/', this.controller.listServices);
        this.router.get('/:id',  this.controller.listService);
        this.router.post('/', this.controller.createService);
        this.router.put('/:id', this.controller.updateService);
        this.router.delete('/:id', this.controller.deleteService); 
    }

    /**
     * This method returns the configurated router.
     * @returns Testing Router
     */
    getRouter(){
        return this.router;
    }
}