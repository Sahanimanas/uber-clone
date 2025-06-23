const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            required:true,
            minlength:[3,'firstname should be minimum 3 of length']
        },
        lastname:{
            type:String,
            minlength:[3,'flastname should be minimum 3 of length']
        }
    },
    email:{
        type:String,
        required:true,
    },
    password:{
         type:String,
        required:true,
        select:false
    },
    socketId:{

    }

})


const usermodel = mongoose.model('user',userSchema);

module.exports = usermodel