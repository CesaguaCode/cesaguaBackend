import { Request, Response, NextFunction, json } from "express";
import BaseValidations from "../shared/baseValidations";
import Validation from "../utils/validators";

export default class ServiceValidations extends BaseValidations {
  
  /**
   * Validate on POST
   */
   public async validatePost(req: Request, res: Response, next: NextFunction) {
    
    const missing = ["title", "description", "details", "image", "contactId"].filter(key => !req.body[key] );

    if(missing.length > 0){
      return res.status(406).json({ status:406, message: `Error, missing ${missing.join(",")}.` });
    }

    const { title, description, image, contactId } = req.body;

    const details = JSON.stringify(req.body.details)
  
   
    

    const params:any = {
      title: !ServiceValidations.isValidTitle(title),
      description: !ServiceValidations.isValidDescription(description),
      details: !ServiceValidations.isValidDetails(details),
      image: !await ServiceValidations.isValidImage(image),
      thumbnail: !await ServiceValidations.isValidImage(image),
      contactId: !ServiceValidations.isValidId(contactId),
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
  public async validatePut(req: Request, res: Response, next: NextFunction) {
    
    const missing = ["title", "description", "details", "image", "contactId"].filter(key => !req.body[key] );

    if(missing.length > 0){
      return res.status(406).json({ status:406, message: `Error, missing ${missing.join(",")}.` });
    }

    const { id } = req.params;
    const { title, description, image, thumbnail, contactId } = req.body;

    const details = JSON.stringify(req.body.details)

    const params:any = {
      id: !ServiceValidations.isValidId(id),
      title: !ServiceValidations.isValidTitle(title),
      description: !ServiceValidations.isValidDescription(description),
      details: !ServiceValidations.isValidDetails(details),
      image: !await ServiceValidations.isValidImage(image),
      thumbnail: !await ServiceValidations.isValidImage(thumbnail),
      contactId: !ServiceValidations.isValidId(contactId),
    }

    const errors = Object.keys(params).filter(key => params[key]);

    if(errors.length > 0){
      return res.status(406).json({ status:406, message: `Error, invalid ${errors.join(",")}.` });
    }

    next();
  }

  private static isValidTitle(text: string) {
    const conditions = [
      !!text,
      Validation.isMinSize(text, 1),
      Validation.isMaxSize(text, 45),
    ];
    
    return Validation.isValid(conditions);
  }

  private static isValidDescription(text: string) {
    const conditions = [
      !!text,
      Validation.isMinSize(text, 1),
      Validation.isMaxSize(text, 1000),
    ];

    return Validation.isValid(conditions);
  }

  private static isValidDetails(text: string) {
    const conditions = [
      !!text,
      Validation.isArray(text),
    ];

    return Validation.isValid(conditions);
  }


  private static async isValidImage(text: string) {
    const conditions = [
      !!text,
      Validation.isValidImage(text),
      await Validation.isValidImageSize(text),
    ];

    return Validation.isValid(conditions);
  }

}
