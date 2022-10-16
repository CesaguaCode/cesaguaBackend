import { Request, Response, NextFunction } from "express";
import BaseValidations from "../utils/baseValidations";
import Validation from "../utils/validators";

export default class MilestoneValidations extends BaseValidations {
  
  /**
   * Validate on POST
   */
   public async validatePost(req: Request, res: Response, next: NextFunction) {
    const missing = ["title", "date", "description", "image"].filter(key => !req.body[key] );

    if(missing.length > 0){
      return res.status(406).json({ status:406, message: `Error, missing ${missing.join(",")}.` });
    }

    const { title, date, description, image } = req.body;

    const params:any = {
      title: !MilestoneValidations.isValidTitle(title),
      date: !MilestoneValidations.isValidDate(date),
      description: !MilestoneValidations.isValidDescription(description),
      image: !await MilestoneValidations.isValidImage(image),
    }

    const errors = Object.keys(params).filter(key => params[key]);
  
    console.log(errors);
    
    
    if(errors.length > 0){
      return res.status(406).json({ status:406, message: `Error, invalid ${errors.join(",")}.` });
    }

    next();
  }

  /**
   * Validate on PUT
   */
  public async validatePut(req: Request, res: Response, next: NextFunction) {
    
    const missing = ["title", "date", "description", "image"].filter(key => !req.body[key] );

    if(missing.length > 0){
      return res.status(406).json({ status:406, message: `Error, missing ${missing.join(",")}.` });
    }

    const { id } = req.params;
    const { title, date, description, image } = req.body;

    const params:any = {
      id: !MilestoneValidations.isValidId(id),
      title: !MilestoneValidations.isValidTitle(title),
      date: !MilestoneValidations.isValidDate(date),
      description: !MilestoneValidations.isValidDescription(description),
      image: !await MilestoneValidations.isValidImage(image),
    }

    const errors = Object.keys(params).filter(key => params[key]);

   
    if(errors.length > 0){
      return res.status(406).json({ status:406, message: `Error, invalid ${errors.join(",")}.` });
    }

    next();
  }

  private static isValidTitle(text: string) {
    const conditions = [
      Validation.isMinSize(text, 1),
      Validation.isMaxSize(text, 45),
    ];
    
    return Validation.isValid(conditions);
  }

  private static isValidDescription(text: string) {
    const conditions = [
      Validation.isMinSize(text, 1),
      Validation.isMaxSize(text, 1000),
    ];

    return Validation.isValid(conditions);
  }

  private static isValidDate(date: string) {
  
    const conditions = [
      Validation.isDate(date),
    ];

    return Validation.isValid(conditions);
  }

  private static async isValidImage(text: string) {
    const conditions = [
      Validation.isValidImage(text),
      await Validation.isValidImageSize(text),
    ];

    return Validation.isValid(conditions);
  }

}