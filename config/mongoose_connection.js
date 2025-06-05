const mongoose=require("mongoose");
mongoose
.connect("mongodb://127.0.0.1:27017/Major_Project")
.then(function(){
console. log("Database_connected");})
.catch(function(err){
console. log(err);})

module.exports = mongoose.connection;