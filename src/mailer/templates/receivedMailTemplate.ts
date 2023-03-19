
/**
 * This method creates the received email template,
 * used when the user send a mail in the contact us section
 * 
 * @returns String Template created
 */
const ReceivedMailTemplate = () => {
    return `
        <table width="100%" border="0" cellspacing="0" cellpadding="0">
            <tr>
                <td align="center">
                    <div
                        style="font-family: sans-serif;  min-height:500px;max-width: 550px;padding:2em; background-position:center 10%; background-image:url('https://i.imgur.com/B9y2ycM.png');">

                        <img style="width:150px" src="https://i.imgur.com/5AlcLnH.png" alt="Logo">

                        <h1 style="margin: .5em 0 0 0; font-size: 3em; color:#227dc2;">CESAGUA</h1>

                        <h2 style="margin: 0px">Notificación de recibido</h2>

                        <p style="max-width: 400px; color:#6e6e6e; margin:1em;">
                            Su correo ha sido recibido exitosamente por la organización, 
                            en un breve lapso de tiempo recibirá una respuesta. 
                        </p>

                        <p style="font-size: .8em; color:#6e6e6e;margin:4em 0 0 0; display:block;">
                            Este correo fue generado automáticamente.
                        </p>
                        <p style="font-size: .8em; color:#6e6e6e; margin:0em; display:block;">
                            No responda a este correo electrónico.
                        </p>

                    </div>
                </td>
            </tr>
        </table>
    `;
}

export default ReceivedMailTemplate;