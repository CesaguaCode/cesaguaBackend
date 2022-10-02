import UserController from "../controllers/user.controller";
import { Router } from 'express';

export default class UserRoutes{

    private controller: UserController;
    private router : Router;

    constructor(){
        this.controller = new UserController();
        this.router = Router();

        this.router.post('/', this.controller.createUser);
        this.router.put('/', this.controller.updateUser);
        this.router.delete('/:id', this.controller.deleteUser);
        this.router.get('/', this.controller.getAllUsers);
        this.router.get('/:id', this.controller.getUserById);
    }

    getRouter(){
        return this.router;
    }



}