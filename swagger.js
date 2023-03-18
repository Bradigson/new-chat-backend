const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");


//metadata info about our api
const options = {
    definition: {
        openapi: "3.0.0",
        info: {title : "VERCEL API", version: "1.0.0"},
    },
    apis: ["./routes/route.js", "./Db/dbconnection.sj"]
}


const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app, port)=>{
    app.use("/api/v1/doc", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    app.get("/api/v1/docs.json", ()=>{
        res.setHeader("Content-Type", "application/json");
        res.send(swaggerSpec);
    });

}


module.exports = {swaggerDocs};