import ContactUsMail from "../models/contactUsMail.model";
import BaseService from "../shared/baseService";

export default class UtilsServices extends BaseService {
    constructor() {
      super();
    }

    sendMail = (mailData : ContactUsMail) : any => {
        
    }
}