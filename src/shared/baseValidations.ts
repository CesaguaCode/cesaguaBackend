import { Request, Response, NextFunction } from "express";
import Validation from "../utils/validators";

/**
 * This base validation inherits all the other validations.
 * Contains methods required on other validations
 */
export default class BaseValidations {

  /**
   * Validates if the given id is allowed
   * 
   * @param req 
   * @param res 
   * @param next 
   * @returns Error if id is not allowed
   */
  public validateId(req: Request, res: Response, next: NextFunction) {
    let { id } = req.params;

    if (!id) {
      id = req.body.id
    }

    if (!BaseValidations.isValidId(id)) {
      return res
        .status(406)
        .json({ status: 406, message: "Error, invalid id." });
    }
    next();
  }

  /**
   * Validate if pass all the conditions to check if the id is valid.
   * @param id : string
   * @returns Boolean
   */
  protected static isValidId(id: string) {
    const conditions = [
      Validation.isNumber(id),
      Validation.isMinNumber(parseInt(id), 1),
      Validation.isMaxNumber(parseInt(id), Number.MAX_SAFE_INTEGER),
    ];

    return Validation.isValid(conditions);
  }
}
