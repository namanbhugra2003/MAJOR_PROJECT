const mongoose=require("mongoose");
const dbgr=require("debug")("development:mongoose_connect");
mongoose
.connect("mongodb://127.0.0.1:27017/Major_Project")
.then(function(){
dbgr("hello ji")    ;
})
.catch(function(err){
console. log(err);})

module.exports = mongoose.connection;