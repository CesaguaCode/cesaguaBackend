import { Request, Response, NextFunction } from "express";
import BaseValidations from "../shared/baseValidations";
import Validation from "../utils/validators";

export default class PinValidations extends BaseValidations {
  
  /**
   * Validate on POST
   */
  public validatePost(req: Request, res: Response, next: NextFunction) { 
    const missing = ["name", "province", "canton", "district", "position"].filter(key => !req.body[key] );

    if(missing.length > 0){
      return res.status(406).json({ status:406, message: `Error, missing ${missing.join(",")}.` });
    }

    const { name, province, canton, district, position } = req.body;

    const params:any = {
      name: !PinValidations.isValidName(name),
      province: !PinValidations.isValidProvince(province),
      canton: !PinValidations.isValidCanton(canton),
      district: !PinValidations.isValidDistrict(district),
      position: !PinValidations.isValidPosition(position)
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
    
    const missing = ["name", "province", "canton", "district", "position"].filter(key => !req.body[key] );

    if(missing.length > 0){
      return res.status(406).json({ status:406, message: `Error, missing ${missing.join(",")}.` });
    }

    const { id } = req.params;
    const { name, province, canton, district, position } = req.body;

   

    const params:any = {
      id: !PinValidations.isValidId(id),
      name: !PinValidations.isValidName(name),
      province: !PinValidations.isValidProvince(province),
      canton: !PinValidations.isValidCanton(canton),
      district: !PinValidations.isValidDistrict(district),
      position: !PinValidations.isValidPosition(position)
    }

    const errors = Object.keys(params).filter(key => params[key]);

    if(errors.length > 0){
      return res.status(406).json({ status:406, message: `Error, invalid ${errors.join(",")}.` });
    }

    next();
  }

  private static isValidName(text: string) {
    const conditions = [
      !!text,
      Validation.isText(text),
      Validation.isMinSize(text, 1),
      Validation.isMaxSize(text, 45),
    ];
    
    return Validation.isValid(conditions);
  }

  private static isValidProvince(text: string) {
    const conditions = [
      !!text,
      Validation.isText(text),
      Validation.isMinSize(text, 1),
      Validation.isMaxSize(text, 45),
    ];

    return Validation.isValid(conditions);
  }

  private static isValidCanton(text: string) {
    const conditions = [
      !!text,
      Validation.isText(text),
      Validation.isMinSize(text, 1),
      Validation.isMaxSize(text, 45),
    ];

    return Validation.isValid(conditions);
  }

  private static isValidDistrict(text: string) {
    const conditions = [
      !!text,
      Validation.isText(text),
      Validation.isMinSize(text, 1),
      Validation.isMaxSize(text, 45),
    ];

    return Validation.isValid(conditions);
  }

  private static isValidPosition(text: string) {
    const conditions = [
      !!text,
      Validation.isArray(text),
      Validation.isPositional(text)
    ];

    return Validation.isValid(conditions);
  }

}