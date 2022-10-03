import { Request, Response, NextFunction } from "express";
import BaseValidations from "../utils/baseValidations";
import Validation from "../utils/validators";

export default class MilestoneValidations extends BaseValidations {
  
  /**
   * Validate on POST
   */
   public validatePost(req: Request, res: Response, next: NextFunction) {

    const { title, description, image } = req.body;

    const params:any = {
      title: !MilestoneValidations.isValidTitle(title),
      description: !MilestoneValidations.isValidDescription(description),
      image: !MilestoneValidations.isValidImage(image),
    }

    const errors = Object.keys(params).filter(key => params[key]);

    if(errors.length > 0){
      return res.status(406).json({ status:406, message: `Error, invalid ${errors.join(",")}.` });
    }

    next();
  }

  /**
   * Validate on PUT
   */
  public validatePut(req: Request, res: Response, next: NextFunction) {
    
    const { id } = req.params;
    const { title, description, image } = req.body;

    const params:any = {
      id: !MilestoneValidations.isValidId(id),
      title: !MilestoneValidations.isValidTitle(title),
      description: !MilestoneValidations.isValidDescription(description),
      image: !MilestoneValidations.isValidImage(image),
    }

    const errors = Object.keys(params).filter(key => params[key]);

    if(errors.length > 0){
      return res.status(406).json({ status:406, message: `Error, invalid ${errors.join(",")}.` });
    }

    next();
  }

  private static isValidTitle(text: string) {
    const conditions = [
      Validation.isText(text),
      Validation.isMinSize(text, 1),
      Validation.isMaxSize(text, 45),
    ];
    
    return Validation.isValid(conditions);
  }

  private static isValidDescription(text: string) {
    const conditions = [
      Validation.isText(text),
      Validation.isMinSize(text, 1),
      Validation.isMaxSize(text, 1000),
    ];

    return Validation.isValid(conditions);
  }

  private static isValidImage(text: string) {
    const conditions = [
      Validation.isText(text),
    ];

    return Validation.isValid(conditions);
  }

}