const mongoose=require("mongoose");

const userschema=mongoose.Schema({
    fullname: String,
    email: String,
    password: String,
    cart:[{
           type: Array,
        default:[] 
    }],
    profilepic:String,
    contact:Number,
    isadmin:Boolean,
    orders:[{
           type: Array,
        default:[]  
    }],
    

})

module.exports=mongoose.model("user",userschema);
