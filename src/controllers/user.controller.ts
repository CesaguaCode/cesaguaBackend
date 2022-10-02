import UsersServices from "../services/users.services";
import { Request, Response } from "express";
import UserModel from './../models/user.model';

export default class UserController{

    private service: UsersServices;

    constructor(){
        this.service = new UsersServices();
    }

    public createUser = async (req: Request, res: Response) => {
        const user: UserModel = {
            name: req.body.name,
            lastName: req.body.lastName,
            mail: req.body.mail,
            password: req.body.password,
            rol:req.body.rol
        }
        const result = await this.service.createUser(user);
    
        res.status(result.state).json(result);
      };

      public updateUser = async (req: Request, res: Response) => {
        const user: UserModel = {
            id: req.body.id,
            name: req.body.name,
            lastName: req.body.lastName,
            mail: req.body.mail,
            password: req.body.password,
            rol:req.body.rol
        }
        const result = await this.service.updateUser(user);
    
        res.status(result.state).json(result);
      };

      public deleteUser = async(req:Request, res: Response) => {
        const result = await this.service.deleteUser(req.body.id);
        res.status(result.state).json(result);
      }

      public getAllUsers = async(req:Request, res: Response) => {
        const result = await this.service.getAllUser();
        res.status(result.state).json(result);
      }

      public getUserById = async(req:Request, res: Response) => {
        const result = await this.service.getUserById(req.body.id);
        res.status(result.state).json(result);
      }
}