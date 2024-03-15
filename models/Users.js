const mongoose=require('mongoose');

const UserSchema=mongoose.Schema({
   
    UserType:{
        type:String,
    },
    username:{
        type:String,
       
    },
    gst:{
        type:String
    },
    pan:{
        type:String,
    },
    aadhar:{
        type:String
    },
    Email:{
        type: String,
    },
    Phone:{
        type:String,
    }
})

mongoose.model("Users",UserSchema);
