const mongoose=require("mongoose");
const dbgr=require("debug")("development:mongoose_connect");
const config=require("config");
mongoose
.connect(`${config.get("MONGODB_URL")}/Major_Project`)
.then(function(){
dbgr("hello ")    ;
})
.catch(function(err){
console. log(err);})

module.exports = mongoose.connection;