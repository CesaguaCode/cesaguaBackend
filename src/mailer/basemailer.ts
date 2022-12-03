import { createTransport, Transporter } from "nodemailer";
import MailResponse from "./mailResponse";

export default class BaseMailer {
  /**
   * Reusable transporter
   */
   protected transporter: Transporter;

  constructor() {
    this.transporter = this.getTransporter();
  }

  /**
   * This method allows to send an basse email
   * @param receiver Mail receiver
   * @param title Mail title
   * @param message Plain message
   * @param template Mail template
   */
  protected async sendMail( receiver: string, title: string, message: string, template: string ): Promise<MailResponse> {
    
    try {
      let info = await this.transporter.sendMail({
        from: process.env.MAIL_USER,
        to: receiver,
        subject: title,
        text: message,
        html: template,
      });

      console.log("Message sent: %s", info.messageId);
      return { error: false, message: info.messageId };
    } catch (error) {

      return { error: true };
    }
  }

  /**
   * This method allows the mailer create a reusable transporter.
   * @returns ReusableTransporter:Transporter
   */
  private getTransporter(): Transporter {
    return createTransport({
      host: "smtp.office365.com",
      port: 587,
      secure: false, 
      auth: {
        user: process.env.MAIL_USER, 
        pass: process.env.MAIL_PASS,
      },
    });
  }
}