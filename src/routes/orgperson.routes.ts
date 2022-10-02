
import { Router } from 'express';
import OrganizationPerson from './../controllers/organizationPerson.controllers';

export default class OrganizationPersonRoutes{

    private controller: OrganizationPerson;
    private router : Router;

    constructor(){
        this.controller = new OrganizationPerson();
        this.router = Router();

        this.router.post('/', this.controller.create);
        this.router.put('/', this.controller.update);
        this.router.delete('/:id', this.controller.deleted);
        this.router.get('/', this.controller.getAll);
        this.router.get('/:id', this.controller.getByid);
    }

    getRouter(){
        return this.router;
    }



}