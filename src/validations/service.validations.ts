import { Request, Response, NextFunction } from "express";
import BaseValidations from "../utils/baseValidations";
import Validation from "../utils/validators";

export default class ServiceValidations extends BaseValidations {
  

  /**
   * Validate on POST
   */
   public validatePost(req: Request, res: Response, next: NextFunction) {

    const { title, description, image } = req.body;

    const params:any = {
      title: !ServiceValidations.isValidTitle(title),
      description: !ServiceValidations.isValidDescription(description),
      details: !ServiceValidations.isValidImage(image),
      image: !ServiceValidations.isValidImage(image),
      thumbnail: !ServiceValidations.isValidImage(image),
      contactId: !ServiceValidations.isValidImage(image),
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
    const { title, description, image, thumbnail, contactId } = req.body;

    const params:any = {
      id: !ServiceValidations.isValidId(id),
      title: !ServiceValidations.isValidTitle(title),
      description: !ServiceValidations.isValidDescription(description),
      details: !ServiceValidations.isValidDetails(image),
      image: !ServiceValidations.isValidImage(image),
      thumbnail: !ServiceValidations.isValidImage(thumbnail),
      contactId: !ServiceValidations.isValidContact(contactId),
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

  private static isValidDetails(text: string) {
    const conditions = [
      Validation.isArray(text),
    ];

    return Validation.isValid(conditions);
  }


  private static isValidImage(text: string) {
    const conditions = [
      Validation.isText(text),
    ];

    return Validation.isValid(conditions);
  }

  private static isValidContact(contact: string) {
    const conditions = [
      Validation.isNumber(contact),
      Validation.isMinSize(contact, 1),
      Validation.isMaxSize(contact, Number.MAX_SAFE_INTEGER),
    ];

    return Validation.isValid(conditions);
  }







}
