/**
 * @openapi
 * 
 * /milestone:
 * 
 *   get:
 *     summary: Return all milestones
 *     tags:
 *       - Milestone
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
 * /milestone/:id:
 *   get:
 *     summary: Get an specific milestone by its id
 *     tags:
 *       - Milestone
 *     consumes: 
 *       - application/json
 *     parameters:
 *       - in: path
 *         description: Milestone id
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
 * /milestone:
 *   post:
 *     summary: Create a milestone
 *     tags:
 *       - Milestone
 *     consumes: 
 *       - application/json
 *     parameters:
 *       - in: body
 *         description: Milestone Data
 *         name: Milestone
 *         schema:
 *           type: object
 *           properties:
 *              title:
 *                  type: string     
 *              date:
 *                  type: string
 *              description:
 *                  type: string
 *              image:
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
 *                   type: integer
 *                   example: 200
 *                 message:
 *                   type: string
 *                   example: "success"
 */


/**
 * @openapi
 * /milestone/:id:
 *   put:
 *     summary: Update an specific milestone
 *     tags:
 *       - Milestone
 *     consumes: 
 *       - application/json
 *     parameters:
 *       - in: path
 *         description: Milestone id
 *         name: id
 *         schema:
 *           type: integer
 *           example: 1
 *       - in: body
 *         description: Milestone Data
 *         name: Milestone 
 *         schema:
 *           type: object
 *           properties: 
 *              title:
 *                  type: string     
 *              date:
 *                  type: string
 *              description:
 *                  type: string
 *              image:
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
 *                   type: integer
 *                   example: 200
 *                 message:
 *                   type: string
 *                   example: "success"
 */

/**
 * @openapi
 * /milestone/:id:
 *   delete:
 *     summary: Deletes an specific milestone
 *     tags:
 *       - Milestone
 *     parameters: 
 *       - in: path
 *         description: Milestone id
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