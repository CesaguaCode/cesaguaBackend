import { Request, Response, NextFunction } from "express";

import BaseValidations from "../utils/baseValidations";
import Validation from "../utils/validators";

export default class UtilsValidations extends BaseValidations {
 
  /**
   * Validate on POST
   */
  public async validateContactUsMessage(req: Request, res: Response, next: NextFunction) {
    const missing = ["name", "email", "message"].filter(key => !req.body[key] );

    if(missing.length > 0){
      return res.status(406).json({ status:406, message: `Error, missing ${missing.join(",")}.` });
    }

    const { name, email, message } = req.body;

    const params:any = {
      name: !UtilsValidations.isValidName(name),
      email: !UtilsValidations.isValidEmail(email),
      message: !UtilsValidations.isValidDescription(message)
    }

    const errors = Object.keys(params).filter(key => params[key]);
  
    if(errors.length > 0){
      return res.status(406).json({ status:406, message: `Error, invalid ${errors.join(",")}.` });
    }

    next();
  }

  private static isValidName(text: string) {
    const conditions = [
      Validation.isMinSize(text, 1),
      Validation.isMaxSize(text, 45),
    ];
    
    return Validation.isValid(conditions);
  }

  private static isValidEmail(text: string) {
    const conditions = [
      Validation.isMinSize(text, 1),
      Validation.isMaxSize(text, 55),
      Validation.isEmail(text)
    ];
    
    return Validation.isValid(conditions);
  }

  private static isValidDescription(text: string) {
    const conditions = [
      Validation.isMinSize(text, 1),
      Validation.isMaxSize(text, 255),
    ];
    
    return Validation.isValid(conditions);
  }


}