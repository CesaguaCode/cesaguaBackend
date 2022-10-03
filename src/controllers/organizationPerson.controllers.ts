import { Request, Response } from "express";
import OrganizationServices from "../services/organizations.services";
import OrganizationPersonModel from '../models/OrgPerson.models';

export default class OrganizationPerson {

    private service: OrganizationServices;

    constructor() {
        this.service = new OrganizationServices();
    }

    public create =async (req:Request, res:Response) => {

        const {id} = req.params;
        const person:OrganizationPersonModel = {...req.body}
        const result = await this.service.createOrganizationPerson(person);
        res.status(result.state).json(result);
        
    }

    public update =async (req:Request, res:Response) => {

        const person:OrganizationPersonModel = {id:req.params, ...req.body}
        const result = await this.service.updateOrganizationPerson(person);
        res.status(result.state).json(result);
        
    }

    public deleted =async (req:Request, res:Response) => {

        const {id} = req.params;
        const {deletedby} = req.body;

        const result = await this.service.deleteOrganizationPerson(parseInt(id), deletedby);
        res.status(result.state).json(result);
        
    }

    public getAll =async (req:Request, res:Response) => {

        const result = await this.service.getAllOrganizationPerson();
        res.status(result.state).json(result);
        
    }

    public getByid =async (req:Request, res:Response) => {

        const {id} = req.params;

        const result = await this.service.getOrganizationPersonById(parseInt(id));
        res.status(result.state).json(result);
        
    }

}