const express = require("express");
const SocketServer = require('socket.io');
const http = require('http');
const cors = require('cors');

const app = express();

const db = require('./db/dbconnection');
const modelsMessage = require('./Models/chat.models');

//socket configuration
const server = http.createServer(app);

app.use(cors('*'));
const io = SocketServer(server, {
    cors:{
        origin:'*'
    }
});



io.on('connection',  (socket)=>{

    socket.on('message_sent', async (message)=>{
        //

        const _messageData = modelsMessage(message);
        _messageData
        .save()
        .then((data)=> console.log(`sent from  : ${socket.id}`))
        .catch((err)=> console.log(err));


        const readMessage = await modelsMessage.find()
        socket.emit("receive_message", readMessage);
    })
});


app.set('port', process.env.PORT || 5000);
app.use(express.json());


app.get('/readMessage', async(req, res)=>{
    try{
        const post = await await modelsMessage.find()
        res.json(post);

    }catch(err){
        res.status(500).send(err);
    }
});

server.listen(app.get('port'), ()=>{
    console.log('server available at : ', app.get('port'));
})