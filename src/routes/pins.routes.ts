import { Router } from "express";
import PinController from "../controllers/pin.controller";
import TokenAuth from "../utils/tokenAuth";
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

        this.router.get(
            '/',
            this.controller.listPins
        );

        this.router.get(
            '/:id',
            this.validator.validateId,
            this.controller.listPin,
        );

        this.router.post(
            '/',
            TokenAuth.checkToken,
            TokenAuth.adminRol, 
            this.validator.validatePost, 
            this.controller.createPin,
        );

        this.router.put(
            '/:id',
            TokenAuth.checkToken,
            TokenAuth.adminRol, 
            this.validator.validatePut,
            this.controller.updatePin, 
        );

        this.router.delete(
            '/:id',
            TokenAuth.checkToken, 
            TokenAuth.adminRol, 
            this.validator.validateId,
            this.controller.deletePin,
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