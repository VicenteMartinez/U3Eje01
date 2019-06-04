const mongoose = require('mongoose');

//DEFINIR ESQUEMA
const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    name:[{
            firstName:{
                required: true,
                type: String
            },
            lastName:{
                required: true,
                type: String
            }
         }],
    password:{
        type: String,
        required: true,
        lowercase: true
     },
    email:{
        type: String,
        required: true,
        match: /.+@.+\..+/,
        lowercase: true
     }
});

//MODELO
const userModel = mongoose.model('User2',userSchema,'users2');

module.exports = userModel;