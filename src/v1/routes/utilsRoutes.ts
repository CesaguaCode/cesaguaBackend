/**
 * @openapi
 * 
 * /utils/mail/contact-us:
 * 
 *   post:
 *     summary: Send an contact us mail
 *     tags:
 *       - Utils
 *     consumes: 
 *       - application/json
 *     parameters:
 *       - in: body
 *         description: Contact mail data
 *         name: MailData 
 *         schema:
 *           type: object
 *           properties: 
 *              name:
 *                  type: string     
 *              email:
 *                  type: string
 *              message:
 *                  type: string
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  status:
 *                      type: integer
 *                      example: 200
 *                  data:
 *                      type: array
 *                      example: []
 *       400:
 *         description: ERR
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 state:
 *                   type: integer
 *                   example: 400
 *                 data:
 *                   type: string
 *                   example: "Elementos no encontrados"
 */
