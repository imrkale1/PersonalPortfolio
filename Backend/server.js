const express =require('express')
const path=require('path')
const cors = require('cors');
require('dotenv').config();


const corsOptions = {
    origin: process.env.ALLOWED_CLIENTS.split(',')
    // ['http://localhost:3000', 'http://localhost:5000', 'http://localhost:3300']
  }
  
// app config
const app=express();
const port = process.env.PORT || 5555
// app.use(cors(corsOptions))
app.use((req,res,next)=>{
        res.setHeader("Access-Control-Allow-Origin","*");
        res.setHeader("Access-Control-Allow-Headers","*");
        next();
    })
    
app.use(express.static('public'))

// middlewares
app.use(express.json())
// db config
const connectDB=require("./config/db");
connectDB();

// Template Engine
app.set("views",path.join(__dirname,"/views"))
app.set("view engine","ejs")


// this will join the root folder and views folder like Backend/views


// Routes
const route=require('./routes/files')
app.use("/api/files",route)
app.use("/files",require("./routes/show"))
app.use("/files/download",require("./routes/download"))
// Listeners
app.listen(port,()=>console.log("Listening to "+port))