import { Request, Response, NextFunction } from "express";
import BaseValidations from "../utils/baseValidations";
import Validation from "../utils/validators";

export default class LoginValidations extends BaseValidations {

  
  /**
   * Validate on POST
   */
   public async validateEmail(req: Request, res: Response, next: NextFunction) {
    const missing = ["mail"].filter(key => !req.body[key] );

    console.log(req.body);
    

    if(missing.length > 0){
      return res.status(406).json({ status:406, message: `Error, missing ${missing.join(",")}.` });
    }

    const { mail } = req.body;

    const params:any = {
      mail: !LoginValidations.isValidmail(mail)
    }

    const errors = Object.keys(params).filter(key => params[key]);
  
  406
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