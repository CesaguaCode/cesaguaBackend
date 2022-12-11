/**
 * @openapi
 * 
 * /service:
 * 
 *   get:
 *     summary: Return all services
 *     tags:
 *       - Service
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
 * /service/:id:
 *   get:
 *     summary: Get an specific service by its id
 *     tags:
 *       - Service
 *     consumes: 
 *       - application/json
 *     parameters:
 *       - in: path
 *         description: Service id
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
 * /service:
 *   post:
 *     summary: Create a service
 *     tags:
 *       - Service
 *     consumes: 
 *       - application/json
 *     parameters:
 *       - in: body
 *         description: Service Data
 *         name: Service
 *         schema:
 *           type: object
 *           properties:
 *              title:
 *                  type: string     
 *              description:
 *                  type: string
 *              details:
 *                  type: string
 *              image:
 *                  type: string
 *              thumbnail:
 *                  type: string
 *              contactId:
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
 * /service/:id:
 *   put:
 *     summary: Update an specific service
 *     tags:
 *       - Service
 *     consumes: 
 *       - application/json
 *     parameters:
 *       - in: path
 *         description: Service id
 *         name: id
 *         schema:
 *           type: integer
 *           example: 1
 *       - in: body
 *         description: Service Data
 *         name: Service 
 *         schema:
 *           type: object
 *           properties: 
 *              title:
 *                  type: string     
 *              description:
 *                  type: string
 *              details:
 *                  type: string
 *              image:
 *                  type: string
 *              thumbnail:
 *                  type: string
 *              contactId:
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
 * /service/:id:
 *   delete:
 *     summary: Deletes an specific service
 *     tags:
 *       - Service
 *     parameters: 
 *       - in: path
 *         description: Service id
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