import { Router } from "express";
import MilestoneController from "../controllers/milestone.controller";
import TokenAuth from "../utils/tokenAuth";
import MilestoneValidations from "../validations/milestone.validations";

export default class MilestoneRouter {

    /**
     * Router controller
     */
    private controller:MilestoneController;

    /**
     * Params validator
     */
    private validator:MilestoneValidations;
    
    /**
     * Testing Router
     */
    private router:Router;
    private cache: any;
    constructor(){
        this.controller = new MilestoneController();
        this.validator = new MilestoneValidations();
        this.router = Router();
        
        this.router.get(
            '/', 
            this.controller.listMilestones
        );

        this.router.get(
            '/:id',
            this.validator.validateId,  
            this.controller.listMilestone
        );

        this.router.post(
            '/',
            TokenAuth.checkToken, 
            TokenAuth.adminRol,
            this.validator.validatePost,
            this.controller.createMilestone
        );

        this.router.put(
            '/:id',
            TokenAuth.checkToken,
            TokenAuth.adminRol, 
            this.validator.validatePut,
            this.controller.updateMilestone
        );

        this.router.delete(
            '/:id',
            TokenAuth.checkToken,
            TokenAuth.adminRol,
            this.validator.validateId,  
            this.controller.deleteMilestone
        ); 
    }

    /**
     * This method returns the configurated router.
     * @returns Testing Router
     */
    getRouter(){
        return this.router;
    }
}