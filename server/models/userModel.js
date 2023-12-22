const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        min: 3,
        max: 20,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        max: 50,
    },
    password:{
        type:String,
        required:true,
        max: 8,
    },
    isAvatarImageSet:{
        type: Boolean,
        default: false,
    },
    avatarImage:{
        type: String,
        default: "",
    }

}, {
    timestamps: true
});

//Export the model
module.exports = mongoose.model('User', userSchema);