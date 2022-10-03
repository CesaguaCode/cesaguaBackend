import { Router } from "express";
import PinController from "../controllers/pin.controller";
import PinValidations from "../validations/pin.validations";

export default class PinRouter {

    /**
     * Router controller
     */
    private controller:PinController;

    /**
     * Params validator
     */
    private validator:PinValidations;
    
    /**
     * Testing Router
     */
    private router:Router;
    
    constructor(){
        this.controller = new PinController();

        this.validator = new PinValidations();

        this.router = Router();

        this.router.get('/', this.controller.listPins);
        this.router.get('/:id',  this.controller.listPin);
        this.router.post('/', this.controller.createPin);
        this.router.put('/:id', this.controller.updatePin);
        this.router.delete('/:id', this.controller.deletePin); 
    }

    /**
     * This method returns the configurated router.
     * @returns Testing Router
     */
    getRouter(){
        return this.router;
    }
}