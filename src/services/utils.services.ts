import ContactUsMail from "../models/contactUsMail.model";
import BaseService from "../utils/baseService";

export default class UtilsServices extends BaseService {
    constructor() {
      super();
    }

    sendMail = (mailData : ContactUsMail) : any => {
        
    }
}