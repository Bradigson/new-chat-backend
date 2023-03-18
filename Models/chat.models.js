
const mongoose = require('mongoose');

const chatScheme = mongoose.Schema({

  //puede ser este
    userName:{
        type:String,
        require:true
    },
    userMessage:{
        type:String,
        require:true
    },
    dateTime:{
        type:String,
        require:true
    }

    

});


//poner siempre la collection en plurar
const Post  = mongoose.model("chatmessages", chatScheme);
module.exports = Post;