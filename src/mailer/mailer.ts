import "dotenv/config";
import BaseMailer from "./basemailer";
import NewUserMailTemplate from "./templates/newUserMailTemplate";
import ReceivedMailTemplate from "./templates/receivedMailTemplate";
import RecoveryMailTemplate from "./templates/recoveryMailTemplate";
import MailResponse from "./mailResponse"
import ContactUsMail from "../models/contactUsMail.model";
import ContactUsMailTemplate from "./templates/contactUsMailTemplate";

/**
 * This class allows the server send specific mails.
 */
export default class Mailer extends BaseMailer {
  /**
   * This method send a message that allows to the user set its first password.
   * @param receiver Receiver of the email
   * @param link Link to send the email
   * @returns Mail Response with a boolean indicating if has succeeded
   */
  public async sendNewUserMail(
    receiver: string,
    link: string
  ): Promise<MailResponse> {
    const response = await this.sendMail(
      receiver,
      "Creación de contraseña - CESAGUA",
      `Correo para creación de su contraseña en la página web, haga clic en el siguiente enlace para continuar. ${link}`,
      NewUserMailTemplate(link)
    );

    return response;
  }

  /**
   * This method send a message that allows to the user recover its password.
   * @param receiver Receiver of the email
   * @param link Link to send the email
   * @returns Mail Response with a boolean indicating if has succeeded
   */
  public async sendRecoveryMail(
    receiver: string,
    link: string
  ): Promise<MailResponse> {
    const response = await this.sendMail(
      receiver,
      "Recuperacion de contraseña - CESAGUA",
      `Este correo se generó debido a una solicitud de recuperación de contraseña realizada en la página, acceda al siguiente enlace para continuar. ${link}`,
      RecoveryMailTemplate(link)
    );

    return response;
  }

  /**
   * This method send a message that informs the user of the reception of his mail.
   * @param receiver Receiver of the email
   * @returns Mail Response with a boolean indicating if has succeeded
   */
  public async sendReceivedContactMail(
    receiver: string
  ): Promise<MailResponse> {

    const response = await this.sendMail(
      receiver,
      "Creación de contraseña - CESAGUA",
      "Su correo ha sido recibido exitosamente por la organización, en un breve lapso de tiempo recibirá una respuesta. ",
      ReceivedMailTemplate()
    );

    return response;
  }

  /**
 * This method send a message that informs the user of the reception of his mail.
 * @param receiver Receiver of the email
 * @returns Mail Response with a boolean indicating if has succeeded
 */
  public async sendContactMail(messageData: ContactUsMail): Promise<MailResponse> {

    const response = await this.sendMail(
      "Testing.node@outlook.com",
      "Mensaje de contacto - CESAGUA",
      `Mensaje de contacto mediante la página web. `,
      ContactUsMailTemplate(messageData)
    );

    return response;
  }
}
