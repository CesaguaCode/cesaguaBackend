import { Request, Response, NextFunction } from "express";
import Validation from "../utils/validators";

export default class TestValidations {
  /**
   * Validate on GET or DELETE
   */
  public validateId(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;

    if (!TestValidations.isValidId(id)) {
      return res.status(406).json({ status:406, message: "Error, invalid id." });
    }
    next();
  }

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

  private static isValidId(id: string) {
    const conditions = [
      Validation.isNumber(id),
      Validation.isMinNumber(parseInt(id), 1),
      Validation.isMaxNumber(parseInt(id), Number.MAX_SAFE_INTEGER),
    ];

    return Validation.isValid(conditions);
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
