import { Request, Response, NextFunction } from "express";
import Validation from "../utils/validators";
const getSize = require("image-size-from-base64")

export default class newsValidations {

    public validId(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params;
        if (!Validation.isNumber(id)) {
            return res.status(406).json({ status: 406, message: "Error, invalid id format." });
        }
        next();
    }

    public validForm(req: Request, res: Response, next: NextFunction){
        const {id,title,description,image} =  req.body;

        if(Validation.isEmpty(title)){
            return res.status(406).json({ status: 406, message: "Error, title value is empty." });
        }

        if(Validation.isEmpty(description)){
            return res.status(406).json({ status: 406, message: "Error, description value is empty." });
        }
        next();
    }


}
