import { Request, Response, NextFunction } from "express";

export default class TestValidations{

contructor(){}

    public validateId(req:Request, res:Response, next:NextFunction){
        const id = parseInt(req.params.id);

        if (!id || isNaN(id) || id < 0){
            return res.status(400).json({message: "Error, Id inválido."})
        }

        next();
    }

    public validateName(req:Request, res:Response, next:NextFunction){
        const name = req.body.name;

        if (!name || name.lenght === 0 ){
            return res.status(400).json({message: "Error, nombre inválido."})
        }

        next();
    }

    public validateAll(req:Request, res:Response, next:NextFunction){
        const id = parseInt(req.params.id);
        const name = req.body.name;

        if (!id || isNaN(id) || id < 0){
            return res.status(400).json({message: "Error, id inválido."})
        }

        if (!name || name.lenght === 0 ){
            return res.status(400).json({message: "Error, nombre inválido."})
        }

        next();
    }


}