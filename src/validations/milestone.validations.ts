import { Request, Response, NextFunction } from "express";
import BaseValidations from "../shared/baseValidations";
import Validation from "../utils/validators";

/**
 * This class handles the validations on login.
 */
export default class MilestoneValidations extends BaseValidations {

  /**
   * --- VALIDATE ON POST ---
   * This middleware validates if the provided parameters are valid
   * 
   * @param req 
   * @param res 
   * @param next 
   * @returns Error if the parameters are is invalid
   */
  public async validatePost(req: Request, res: Response, next: NextFunction) {

    const missing = ["title", "date", "description", "image"].filter(key => !req.body[key]);

    if (missing.length > 0) {
      return res.status(406).json({ status: 406, message: `Error, missing ${missing.join(",")}.` });
    }

    const { title, date, description, image } = req.body;

    const params: any = {
      title: !MilestoneValidations.isValidTitle(title),
      date: !MilestoneValidations.isValidDate(date),
      description: !MilestoneValidations.isValidDescription(description),
      image: !await MilestoneValidations.isValidImage(image),
    }

    const errors = Object.keys(params).filter(key => params[key]);


    if (errors.length > 0) {
      return res.status(406).json({ status: 406, message: `Error, invalid ${errors.join(",")}.` });
    }

    next();
  }

  /**
   * --- VALIDATE ON PUT ---
   * This middleware validates if the provided parameters are valid
   * 
   * @param req 
   * @param res 
   * @param next 
   * @returns Error if the parameters are is invalid
   */
  public async validatePut(req: Request, res: Response, next: NextFunction) {

    const missing = ["title", "date", "description", "image"].filter(key => !req.body[key]);

    if (missing.length > 0) {
      return res.status(406).json({ status: 406, message: `Error, missing ${missing.join(",")}.` });
    }

    const { id } = req.params;
    const { title, date, description, image } = req.body;

    const params: any = {
      id: !MilestoneValidations.isValidId(id),
      title: !MilestoneValidations.isValidTitle(title),
      date: !MilestoneValidations.isValidDate(date),
      description: !MilestoneValidations.isValidDescription(description),
      image: !await MilestoneValidations.isValidImage(image),
    }

    const errors = Object.keys(params).filter(key => params[key]);


    if (errors.length > 0) {
      return res.status(406).json({ status: 406, message: `Error, invalid ${errors.join(",")}.` });
    }

    next();
  }

  /**
   * This method validates all the conditions to check if the title is valid
   * @param text: title
   * @returns Boolean if is valid or not
   */
  private static isValidTitle(text: string) {
    const conditions = [
      Validation.isMinSize(text, 1),
      Validation.isMaxSize(text, 45),
    ];

    return Validation.isValid(conditions);
  }

  /**
 * This method validates all the conditions to check if the description is valid
 * @param text: description
 * @returns Boolean if is valid or not
 */
  private static isValidDescription(text: string) {
    const conditions = [
      Validation.isMinSize(text, 1),
      Validation.isMaxSize(text, 1000),
    ];

    return Validation.isValid(conditions);
  }

  /**
* This method validates all the conditions to check if the date is valid
* @param text: date
* @returns Boolean if is valid or not
*/
  private static isValidDate(date: string) {

    const conditions = [
      Validation.isDate(date),
    ];

    return Validation.isValid(conditions);
  }

  /**
* This method validates all the conditions to check if the image is valid
* @param text: image
* @returns Boolean if is valid or not
*/
  private static async isValidImage(text: string) {
    const conditions = [
      Validation.isValidImage(text),
      await Validation.isValidImageSize(text),
    ];

    return Validation.isValid(conditions);
  }

}