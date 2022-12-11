import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express"

const options = {
    definition: {
        openapi: "3.0.0",
        info: {title: "Cesagua Backend API", version: "1.0.0"}
    },
    apis: [
        "src/v1/routes/loginRoutes.ts",
        "src/v1/routes/milestonesRoutes.ts",
        "src/v1/routes/pinsRoutes.ts",
        "src/v1/routes/servicesRoutes.ts"
    ]
}

const swaggerSpec = swaggerJSDoc(options)

const swaggerDocs = (app:any, port:any) => {
    app.use("/api/v1/docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));
    console.log("🗒️ Swagger documentation running on", `http://localhost:${port}/api/v1/docs/`);
}

export default swaggerDocs