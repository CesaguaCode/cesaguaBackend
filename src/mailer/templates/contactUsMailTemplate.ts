import ContactUsMail from "../../models/contactUsMail.model";

/**
 * This method creates the contact us email template
 * 
 * @param messageData : Data to add to the template
 * @returns String Template created
 */
const ContactUsMailTemplate = (messageData:ContactUsMail) => {
    return `
    <table width="100%" border="0" cellspacing="0" cellpadding="0">
    <tr>
        <td align="center">
            <div
                style="font-family: sans-serif;  min-height:500px;max-width: 550px;padding:2em; background-position:center 10%;">

                <h1 style="margin: .5em 0 0 0; font-size: 2em; color:#227dc2;">${messageData.name}</h1>

                <h2 style="margin: 0px">${messageData.email}</h2>

                <p style="max-width: 400px; color:#6e6e6e; margin:1em;">
                    ${messageData.message}
                </p>

                <p style="font-size: .8em; color:#6e6e6e;margin:0; display:block;">
                   ${new Date().toLocaleDateString()}
                </p>

            </div>
        </td>
    </tr>
</table>
    `;
}

export default ContactUsMailTemplate;