import UserController from "../controllers/user.controller";
import { Router } from 'express';
import Validations from '../validations/users.validations';

export default class UserRoutes{

    private controller: UserController;
    private router : Router;
    private validations: Validations;

    constructor(){
        this.controller = new UserController();
        this.router = Router();
        this.validations = new Validations();

        this.router.post('/',this.validations.validateForm,this.controller.createUser);
        this.router.put('/',this.validations.validateForm, this.controller.updateUser);
        this.router.delete('/:id', this.validations.validId, this.controller.deleteUser);
        this.router.get('/', this.controller.getAllUsers);
        this.router.get('/:id', this.validations.validId, this.controller.getUserById);
    }

    getRouter(){
        return this.router;
    }



}