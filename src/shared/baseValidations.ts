import { Request, Response, NextFunction } from "express";
import Validation from "../utils/validators";

export default class BaseValidations {
  /**
   * Validate on GET or DELETE
   */
   public validateId(req: Request, res: Response, next: NextFunction) {
    let { id } = req.params;
    
    if( !id ){
      id = req.body.id
    }

    if (!BaseValidations.isValidId(id)) {
      return res
        .status(406)
        .json({ status: 406, message: "Error, invalid id." });
    }
    next();
  }

  protected static isValidId(id: string) {
    const conditions = [
      Validation.isNumber(id),
      Validation.isMinNumber(parseInt(id), 1),
      Validation.isMaxNumber(parseInt(id), Number.MAX_SAFE_INTEGER),
    ];

    return Validation.isValid(conditions);
  }
}
