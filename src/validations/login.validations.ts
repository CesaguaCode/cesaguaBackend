import { Request, Response, NextFunction } from "express";
import BaseValidations from "../shared/baseValidations";
import Validation from "../utils/validators";

export default class LoginValidations extends BaseValidations {

  
  /**
   * Validate on POST
   */
   public async validateEmail(req: Request, res: Response, next: NextFunction) {
    const missing = ["email"].filter(key => !req.body[key] );

    if(missing.length > 0){
      return res.status(406).json({ status:406, message: `Error, missing ${missing.join(",")}.` });
    }

    const { email } = req.body;

    const params:any = {
      mail: !LoginValidations.isValidmail(email)
    }

    const errors = Object.keys(params).filter(key => params[key]);
  

    if(errors.length > 0){
      return res.status(406).json({ status:406, message: `Error, invalid ${errors.join(",")}.` });
    }

    next();
  }

  private static isValidmail(text: string) {
    const conditions = [
      Validation.isEmail(text),
    ];
    
    return Validation.isValid(conditions);
  }

}