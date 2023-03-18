
const express = require('express');

const {swaggerDocs : v1swaggerDocs} = require('./swagger')

const routers = require('./routes/route');

const db = require('./Db/dbconnection');

const cors = require('cors');

const app = express();




app.set("port", process.env.PORT || 6000);

const whitelist = ['*'];

app.use(express.json());

app.use(cors({
    origin:whitelist
}));

app.use('/api/v1', routers);

const port = app.get("port");

app.listen(port,()=>{
    console.log("server available at:", port );
    v1swaggerDocs(app, app.get("port"));
})


