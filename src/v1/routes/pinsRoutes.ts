/**
 * @openapi
 * 
 * /pin:
 * 
 *   get:
 *     summary: Return all pins
 *     tags:
 *       - Pin
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

/**
 * @openapi
 * /pin/:id:
 *   get:
 *     summary: Get an specific pin by its id
 *     tags:
 *       - Pin
 *     consumes: 
 *       - application/json
 *     parameters:
 *       - in: path
 *         description: Pin id
 *         name: id
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: integer
 *                   example: 200
 *                 data:
 *                   type: object
 *                   properties:
 *                      id:
 *                          type: integer
 *                          example: 1
 *                      title:
 *                          type: string
 *                          example: Some Title
 *                      date:
 *                          type: date
 *                          example: 18/08/1997
 *                      description:
 *                          type: string
 *                          example: 1
 *                      image:
 *                          type: string
 *                          example: data:image/webp;base64,U...
 * 
 *       406:
 *         description: ERR
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 state:
 *                   type: integer
 *                   example: 406
 *                 data:
 *                   type: string
 *                   example: "Error, id inválido."
 */

/**
 * @openapi
 * /pin:
 *   post:
 *     summary: Create a pin
 *     tags:
 *       - Pin
 *     consumes: 
 *       - application/json
 *     parameters:
 *       - in: body
 *         description: Pin Data
 *         name: Pin
 *         schema:
 *           type: object
 *           properties:
 *              name:
 *                  type: string     
 *              province:
 *                  type: string
 *              canton:
 *                  type: string
 *              district:
 *                  type: string
 *              position:
 *                  type: string
 *              user_id:
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
 *                   type: integer
 *                   example: 200
 *                 message:
 *                   type: string
 *                   example: "success"
 */


/**
 * @openapi
 * /pin/:id:
 *   put:
 *     summary: Update an specific pin
 *     tags:
 *       - Pin
 *     consumes: 
 *       - application/json
 *     parameters:
 *       - in: path
 *         description: Pin id
 *         name: id
 *         schema:
 *           type: integer
 *           example: 1
 *       - in: body
 *         description: Pin Data
 *         name: Pin 
 *         schema:
 *           type: object
 *           properties: 
 *              name:
 *                  type: string     
 *              province:
 *                  type: string
 *              canton:
 *                  type: string
 *              district:
 *                  type: string
 *              position:
 *                  type: string
 *              user_id:
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
 *                   type: integer
 *                   example: 200
 *                 message:
 *                   type: string
 *                   example: "success"
 */

/**
 * @openapi
 * /pin/:id:
 *   delete:
 *     summary: Deletes an specific pin
 *     tags:
 *       - Pin
 *     parameters: 
 *       - in: path
 *         description: Pin id
 *         name: id
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: integer
 *                   example: 200
 *                 valid:
 *                   type: boolean
 *                   example: true
 *       404:
 *         description: ERR
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 state:
 *                   type: integer
 *                   example: 404
 *                 data:
 *                   type: string
 *                   example: "No encontrado"
 */