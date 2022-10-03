import { Router } from "express";
import MilestoneController from "../controllers/milestone.controller";
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
    
    constructor(){
        this.controller = new MilestoneController();

        this.validator = new MilestoneValidations();

        this.router = Router();

        this.router.get('/', this.controller.listMilestones);
        this.router.get('/:id',  this.controller.listMilestone);
        this.router.post('/', this.controller.createMilestone);
        this.router.put('/:id', this.controller.updateMilestone);
        this.router.delete('/:id', this.controller.deleteMilestone); 
    }

    /**
     * This method returns the configurated router.
     * @returns Testing Router
     */
    getRouter(){
        return this.router;
    }
}