const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");
const path = require("path");
const db=require("./config/mongoose_connection")
// jis route ko use karna ha uski require kar liya 
const userRoutes = require('./routes/userrouter');
const ownerRoutes=require('./routes/ownerrouter');
const productRoutes=require('./routes/prouctrouter');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

// ✅ Use the routes with a base path 
app.use('/user', userRoutes); 

app.use('/owner',ownerRoutes);

app.use('/product',productRoutes);

app.get("/", (req, res) =>{
res. send ("hey");
})
app.listen(3000,()=>{
    console.log("server started")
});



