import LoginController from "../controllers/login.controller";
import { Router } from 'express';
import Validations from '../validations/login.validations';
import TokenAuth from "../utils/tokenAuth";

export default class LoginRouter{

    private controller: LoginController;
    private router : Router;
    private validations: Validations;
   

    constructor(){
        this.controller = new LoginController();
        this.router = Router();
        this.validations = new Validations();

        this.router.post('/', this.validations.validateEmail, this.controller.validLogin);
        this.router.post('/exists', this.validations.validateEmail, this.controller.existsEmail);
        this.router.post('/validToken', TokenAuth.checkToken, this.controller.validToken);
        this.router.post('/reset',this.controller.resetPassword);
        this.router.post('/resetEmail', this.validations.validateId, this.controller.sendResetEmail);

    }

    getRouter(){
        return this.router;
    }



}