/**
 * @openapi
 * 
 * /login:
 * 
 *   post:
 *     summary: Return token if the credentials are OK
 *     tags:
 *       - Login
 *     consumes: 
 *       - application/json
 *     parameters:
 *       - in: body
 *         description: User Email
 *         name: credentials
 *         schema:
 *           type: object
 *           properties:
 *              email:
 *                  type: string
 *              password:
 *                  type: string
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: int
 *                   example: 200
 *                 token:
 *                   type: string
 *                   example: "eyJhbGciOiJIUzI1NiIsInR5cCI..."
 *       400:
 *         description: ERR
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 state:
 *                   type: int
 *                   example: 400
 *                 data:
 *                   type: string
 *                   example: "Datos inválidos"
 */

/**
 * @openapi
 * /login/reset:
 *   post:
 *     summary: Reset the user password
 *     tags:
 *       - Login
 *     consumes: 
 *       - application/json
 *     parameters:
 *       - in: body
 *         description: User Id
 *         name: credentials
 *         schema:
 *           type: object
 *           properties:
 *              id:
 *                  type: integer
 *              password:
 *                  type: string
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: int
 *                   example: 200
 *                 token:
 *                   type: string
 *                   example: "success"
 *       400:
 *         description: ERR
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 state:
 *                   type: int
 *                   example: 400
 *                 data:
 *                   type: string
 *                   example: "Datos inválidos"
 */

/**
 * @openapi
 * /login/resetEmail:
 *   post:
 *     summary: Send an email to the user for reset password
 *     tags:
 *       - Login
 *     consumes: 
 *       - application/json
 *     parameters:
 *       - in: body
 *         description: User Id
 *         name: credentials
 *         schema:
 *           type: object
 *           properties:
 *              id:
 *                  type: integer
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: int
 *                   example: 200
 *                 token:
 *                   type: string
 *                   example: "success"
 *       404:
 *         description: ERR
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 state:
 *                   type: int
 *                   example: 404
 *                 data:
 *                   type: string
 *                   example: "Elemento no encontrad"
 */


/**
 * @openapi
 * /login/exists:
 *   post:
 *     summary: Return if the email exists on the database
 *     tags:
 *       - Login
 *     consumes: 
 *       - application/json
 *     parameters:
 *       - in: body
 *         description: User Email
 *         name: credentials
 *         schema:
 *           type: object
 *           properties:
 *              email:
 *                  type: string
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: int
 *                   example: 200
 *                 data:
 *                   type: object
 *                   example: {"id":1}
 *                   properties:
 *                      id:
 *                          type: int
 *       404:
 *         description: ERR
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 state:
 *                   type: int
 *                   example: 404
 *                 data:
 *                   type: string
 *                   example: "Elemento no encontrado"
 */

/**
 * @openapi
 * /login/validToken:
 *   post:
 *     summary: Return if the provided token is valid
 *     tags:
 *       - Login
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: int
 *                   example: 200
 *                 valid:
 *                   type: boolean
 *                   example: true
 *       403:
 *         description: ERR
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 state:
 *                   type: int
 *                   example: 403
 *                 data:
 *                   type: string
 *                   example: "Token Inválido"
 */