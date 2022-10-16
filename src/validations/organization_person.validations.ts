import { Request, Response, NextFunction } from "express";
import Validation from "../utils/validators";

export default class OrganizationValidations{

    public validId(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params;
        if (!Validation.isNumber(id)) {
            return res.status(406).json({ status: 406, message: "Error, invalid id format." });
        }
        next();
    }

    public static async isValidimage(image: string) {

        const val = [
            Validation.isValidImage(image),
            await Validation.isValidImageSize(image)
        ];

        return Validation.isValid(val);
    }

    public static isValidString(name: string){

        const val = [
            Validation.isEmpty(name),
            Validation.isText(name)
        ];
        return Validation.isValid(val);
    }

    public async validForm(req: Request, res: Response, next: NextFunction) {

        const { id,name,lastname,image,phone,mail,position} = req.body;
        
        console.log( !await OrganizationValidations.isValidimage(image));

        if( !await OrganizationValidations.isValidimage(image)){
            return res.status(406).json({ status: 406, message: "Error, size or format incorrect." });
        }

        if (Validation.isEmail(mail)) {
            return res.status(406).json({ status: 406, message: "Error, email format is incorrect." });
        }

        if (OrganizationValidations.isValidString(name)) {
            return res.status(406).json({ status: 406, message: "Error, empty or format is incorect." });
        }

        if (OrganizationValidations.isValidString(lastname)) {
            return res.status(406).json({ status: 406, message: "Error, empty or format is incorect.." });
        }

        if(Validation.isNumber(phone)){
            return res.status(406).json({ status: 406, message: "Error, phon number is incorrect." });
        }

        if(Validation.isNumber(position)){
            return res.status(406).json({ status: 406, message: "Error, only accept number values." });
        }
        next();
    }

}