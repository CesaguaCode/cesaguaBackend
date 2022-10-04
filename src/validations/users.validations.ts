import { Request, Response, NextFunction } from "express";
import Validation from "../utils/validators";

export default class Validations {

    public async validateForm(req: Request, res: Response, next: NextFunction) {

        const { id, name, lastName, mail, password, rol } = req.body;

        if (!Validation.isText(name)) {
            return res.status(406).json({ status: 406, message: "Error, invalid name." });

        }

        if (!Validation.isText(lastName)) {
            return res.status(406).json({ status: 406, message: "Error, invalid lastname." });

        }

        if (!Validation.isEmail(mail)) {
            return res.status(406).json({ status: 406, message: "Error, invalid email." });

        }

        if (!Validation.validPassword(password)) {
            return res.status(406).json({ status: 406, message: "Error, invalid password." });

        }

        if (!Validation.isNumber(id)) {
            return res.status(406).json({ status: 406, message: "Error, invalid id format." });
        }
        next();

    }

    public validId(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params;
        if (!Validation.isNumber(id)) {
            return res.status(406).json({ status: 406, message: "Error, invalid id format." });
        }
        next();
    }

}
