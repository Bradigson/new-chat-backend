
const mongoose = require('mongoose');
require('dotenv').config({path:'./.env'});
const connectionstring = `${process.env.DB_URL}`;
const conexion = mongoose.connect(connectionstring, {useNewUrlParser: true,useUnifiedTopology: true}).then(()=> console.log('conected')).catch((err)=> console.log(err));

module.exports = conexion;