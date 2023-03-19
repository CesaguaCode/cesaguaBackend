import { Request, Response, NextFunction } from "express";
import BaseValidations from "../shared/baseValidations";
import Validation from "../utils/validators";

/**
 * This class handles the validations on login.
 */
export default class LoginValidations extends BaseValidations {

  /**
   * --- VALIDATE ON POST ---
   * This middleware validates if the provided email is valid
   * 
   * @param req 
   * @param res 
   * @param next 
   * @returns Error if the mail is invalid
   */
  public async validateEmail(req: Request, res: Response, next: NextFunction) {
    const missing = ["email"].filter(key => !req.body[key]);

    if (missing.length > 0) {
      return res.status(406).json({ status: 406, message: `Error, missing ${missing.join(",")}.` });
    }

    const { email } = req.body;

    const params: any = {
      mail: !LoginValidations.isValidmail(email)
    }

    const errors = Object.keys(params).filter(key => params[key]);


    if (errors.length > 0) {
      return res.status(406).json({ status: 406, message: `Error, invalid ${errors.join(",")}.` });
    }

    next();
  }

  /**
   * This method validates all the conditions to check if the email is valid
   * @param text: Email
   * @returns Boolean if is valid or not
   */
  private static isValidmail(text: string) {
    const conditions = [
      Validation.isEmail(text),
    ];

    return Validation.isValid(conditions);
  }

}