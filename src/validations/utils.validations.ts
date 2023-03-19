import { Request, Response, NextFunction } from "express";

import BaseValidations from "../shared/baseValidations";
import Validation from "../utils/validators";

/**
 * This class contains multiple middlewares validations
 */
export default class UtilsValidations extends BaseValidations {

  /**
   * --- VALIDATE ON POST ---
   * This middleware validates if the provided parameters are valid
   * 
   * @param req 
   * @param res 
   * @param next 
   * @returns Error if the parameters are invalid
   */
  public validateContactUsMessage(req: Request, res: Response, next: NextFunction) {
    const missing = ["name", "email", "message"].filter(key => !req.body[key]);

    if (missing.length > 0) {
      return res.status(406).json({ status: 406, message: `Error, missing ${missing.join(",")}.` });
    }

    const { name, email, message } = req.body;

    const params: any = {
      name: !UtilsValidations.isValidName(name),
      email: !UtilsValidations.isValidEmail(email),
      message: !UtilsValidations.isValidDescription(message)
    }

    const errors = Object.keys(params).filter(key => params[key]);

    if (errors.length > 0) {
      return res.status(406).json({ status: 406, message: `Error, invalid ${errors.join(",")}.` });
    }

    next();
  }

  /**
 * This method validates all the conditions to check if the name is valid
 * @param text: Name
 * @returns Boolean if is valid or not
 */
  private static isValidName(text: string) {
    const conditions = [
      Validation.isMinSize(text, 1),
      Validation.isMaxSize(text, 45),
    ];

    return Validation.isValid(conditions);
  }

  /**
 * This method validates all the conditions to check if the email is valid
 * @param text: Email
 * @returns Boolean if is valid or not
 */
  private static isValidEmail(text: string) {
    const conditions = [
      Validation.isMinSize(text, 1),
      Validation.isMaxSize(text, 55),
      Validation.isEmail(text)
    ];

    return Validation.isValid(conditions);
  }

  /**
 * This method validates all the conditions to check if the description is valid
 * @param text: Description
 * @returns Boolean if is valid or not
 */
  private static isValidDescription(text: string) {
    const conditions = [
      Validation.isMinSize(text, 1),
      Validation.isMaxSize(text, 255),
    ];

    return Validation.isValid(conditions);
  }

}