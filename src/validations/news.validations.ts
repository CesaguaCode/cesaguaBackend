import { Request, Response, NextFunction } from "express";
import Validation from "../utils/validators";
const getSize = require("image-size-from-base64")

export default class NewsValidations {

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

    public async validForm(req: Request, res: Response, next: NextFunction) {
        const { id, title, description, image } = req.body;
        
        console.log( !await NewsValidations.isValidimage(image));

        if( !await NewsValidations.isValidimage(image)){
            return res.status(406).json({ status: 406, message: "Error, size or format incorrect." });
        }

        if (Validation.isEmpty(title)) {
            return res.status(406).json({ status: 406, message: "Error, title value is empty." });
        }

        if (Validation.isEmpty(description)) {
            return res.status(406).json({ status: 406, message: "Error, description value is empty." });
        }
        next();
    }




}
