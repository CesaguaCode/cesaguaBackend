import { Request, Response } from "express";
import Mailer from "../mailer/mailer";
import contactUsMail from "../models/contactUsMail.model";
import UtilsServices from "../services/utils.services";

export default class UtilsController{

    private service: UtilsServices;

    constructor(){
        this.service = new UtilsServices();
    }

    public sendContactUsMail = async (req:Request, res:Response) => {

        const mailData:contactUsMail = {...req.body}
    
        // TODO: Send to MailData email
        const validateMail = await new Mailer().sendReceivedContactMail("luis.leiton.cr@gmail.com");

        console.log()
        
        if(validateMail.error){
            return res.status(400).json({state: 400, data:"Error validating user mail"});
        }

        const sentMail = await new Mailer().sendContactMail(mailData);

        return res.status(200).json({state: 200, data:"Mail sended"});


    }

}