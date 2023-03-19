import { Request, Response, NextFunction } from "express";
import BaseValidations from "../shared/baseValidations";
import Validation from "../utils/validators";

export default class PinValidations extends BaseValidations {

  /**
   * --- VALIDATE ON POST ---
   * This middleware validates if the parameters are valid
   * 
   * @param req 
   * @param res 
   * @param next 
   * @returns Error if the parameters are invalid
   */
  public validatePost(req: Request, res: Response, next: NextFunction) {
    const missing = ["name", "province", "canton", "district", "position"].filter(key => !req.body[key]);

    if (missing.length > 0) {
      return res.status(406).json({ status: 406, message: `Error, missing ${missing.join(",")}.` });
    }

    const { name, province, canton, district, position } = req.body;

    const params: any = {
      name: !PinValidations.isValidName(name),
      province: !PinValidations.isValidProvince(province),
      canton: !PinValidations.isValidCanton(canton),
      district: !PinValidations.isValidDistrict(district),
      position: !PinValidations.isValidPosition(position)
    }

    const errors = Object.keys(params).filter(key => params[key]);

    if (errors.length > 0) {
      return res.status(406).json({ status: 406, message: `Error, invalid ${errors.join(",")}.` });
    }

    next();
  }

  /**
   * --- VALIDATE ON PUT ---
   * This middleware validates if the parameters are valid
   * 
   * @param req 
   * @param res 
   * @param next 
   * @returns Error if the parameters are invalid
   */
  public validatePut(req: Request, res: Response, next: NextFunction) {

    const missing = ["name", "province", "canton", "district", "position"].filter(key => !req.body[key]);

    if (missing.length > 0) {
      return res.status(406).json({ status: 406, message: `Error, missing ${missing.join(",")}.` });
    }

    const { id } = req.params;
    const { name, province, canton, district, position } = req.body;


    const params: any = {
      id: !PinValidations.isValidId(id),
      name: !PinValidations.isValidName(name),
      province: !PinValidations.isValidProvince(province),
      canton: !PinValidations.isValidCanton(canton),
      district: !PinValidations.isValidDistrict(district),
      position: !PinValidations.isValidPosition(position)
    }

    const errors = Object.keys(params).filter(key => params[key]);

    if (errors.length > 0) {
      return res.status(406).json({ status: 406, message: `Error, invalid ${errors.join(",")}.` });
    }

    next();
  }

  /**
   * This method validates all the conditions to check if the name is valid
   * @param text: name
   * @returns Boolean if is valid or not
   */
  private static isValidName(text: string) {
    const conditions = [
      !!text,
      Validation.isText(text),
      Validation.isMinSize(text, 1),
      Validation.isMaxSize(text, 45),
    ];

    return Validation.isValid(conditions);
  }

  /**
 * This method validates all the conditions to check if the province is valid
 * @param text: province
 * @returns Boolean if is valid or not
 */
  private static isValidProvince(text: string) {
    const conditions = [
      !!text,
      Validation.isText(text),
      Validation.isMinSize(text, 1),
      Validation.isMaxSize(text, 45),
    ];

    return Validation.isValid(conditions);
  }

  /**
 * This method validates all the conditions to check if the canton is valid
 * @param text: canton
 * @returns Boolean if is valid or not
 */
  private static isValidCanton(text: string) {
    const conditions = [
      !!text,
      Validation.isText(text),
      Validation.isMinSize(text, 1),
      Validation.isMaxSize(text, 45),
    ];

    return Validation.isValid(conditions);
  }

  /**
 * This method validates all the conditions to check if the district is valid
 * @param text: district
 * @returns Boolean if is valid or not
 */
  private static isValidDistrict(text: string) {
    const conditions = [
      !!text,
      Validation.isText(text),
      Validation.isMinSize(text, 1),
      Validation.isMaxSize(text, 45),
    ];

    return Validation.isValid(conditions);
  }

  /**
 * This method validates all the conditions to check if the position is valid
 * @param text: position
 * @returns Boolean if is valid or not
 */
  private static isValidPosition(text: string) {
    const conditions = [
      !!text,
      Validation.isArray(text),
      Validation.isPositional(text)
    ];

    return Validation.isValid(conditions);
  }

}