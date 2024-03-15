const express=require('express')
const app=express();
const connectDb = require('./config/db')
connectDb();
const cors = require("cors");
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
require("./models/Users")
require("./models/GreenForm")

const AuthRouter=require("./Routes/Auth");
app.use("/Auth",AuthRouter)

app.listen("5010",()=>{
    console.log("Server is running on port 5010");
})