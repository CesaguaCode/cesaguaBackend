const RecoveryMailTemplate = (link:String) => {
    return `
        <table width="100%" border="0" cellspacing="0" cellpadding="0">
            <tr>
                <td align="center">
                    <div
                        style="font-family: sans-serif;  min-height:500px;max-width: 550px;padding:2em; background-position:center 10%; background-image:url('https://i.imgur.com/B9y2ycM.png');">

                        <img style="width:150px" src="https://i.imgur.com/5AlcLnH.png" alt="Logo">

                        <h1 style="margin: .5em 0 0 0; font-size: 3em; color:#227dc2;">CESAGUA</h1>

                        <h2 style="margin: 0px">Recuperación de contraseña</h2>

                        <p style="max-width: 400px; color:#6e6e6e; margin:1em;">
                            Este correo se generó debido a una solicitud de recuperación de contraseña, para proseguir con su recuperación haga clic en el siguiente botón.
                        </p>

                        <a href="${link}" target="_blank" rel="noopener noreferrer"
                            style=" display: inline-block; margin:1em;padding: 1em 2em; text-decoration:none;border-radius:100vmax; border:transparent; background-color:#9abf22;color:white;">Acceder
                        </a>

                        <p style="font-size: .8em; color:#6e6e6e;margin:0; display:block;">
                            Si no desea realizar el proceso ignore este correo.
                        </p>
                        <p style="font-size: .8em; color:#6e6e6e; margin:0em; display:block;">
                            Este correo expira 24 horas a partir de su solicitud.
                        </p>

                    </div>
                </td>
            </tr>
        </table>
    `;
}

export default RecoveryMailTemplate;