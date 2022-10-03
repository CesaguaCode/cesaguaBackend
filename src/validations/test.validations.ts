import { Request, Response, NextFunction } from "express";
import BaseValidations from "../utils/baseValidations";
import Validation from "../utils/validators";

export default class TestValidations extends BaseValidations {

  /**
   * Validate on POST
   */
  public validatePost(req: Request, res: Response, next: NextFunction) {
    const { name } = req.body;

    if (!TestValidations.isValidName(name)) {
      return res.status(406).json({ status:406, message: "Error, invalid name." });
    }

    next();
  }

  /**
   * Validate on PUT
   */
  public validatePut(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const { name } = req.body;

    if (!TestValidations.isValidId(id)) {
      return res.status(406).json({ status:406, message: "Error, invalid id." });
    }

    if (!TestValidations.isValidName(name)) {
      return res.status(406).json({ status:406, message: "Error, invalid name." });
    }

    next();
  }

  private static isValidName(name: string) {
    const conditions = [
      Validation.isText(name),
      Validation.isMinSize(name, 1),
      Validation.isMinSize(name, 15),
    ];

    return Validation.isValid(conditions);
  }
}
