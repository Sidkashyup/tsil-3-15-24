const express = require("express");
const { default: mongoose } = require("mongoose");
const router = express.Router();
require('../models/Users')
const users=mongoose.model('Users');
router.post('/Signup',async(req,res)=>{
   try {
      const user=new users({
         ...req.body,
      })
      const resp=await user.save();
      res.send(resp);
   } catch (error) {
      res.send(error);
   }
})
router.get('/Login',(req,res)=>{
   res.send("This is Login page");
})

module.exports=router;