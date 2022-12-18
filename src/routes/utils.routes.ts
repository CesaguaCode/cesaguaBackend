
import { Router } from 'express';
import Validations from '../validations/utils.validations';
import UtilsController from "../controllers/util.controller";

export default class UtilsRouter{

    private controller: UtilsController;
    private router : Router;
    private validations: Validations;

    constructor(){
        this.controller = new UtilsController();
        this.router = Router();
        this.validations = new Validations();

        this.router.post('/mail/contact-us', this.validations.validateContactUsMessage, this.controller.sendContactUsMail);
    }

    getRouter(){
        return this.router;
    }



}