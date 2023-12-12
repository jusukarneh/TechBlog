const router = require('express').Router();
const User = require('../models/User');



router.get("/admin", (req,res)=>{

res.render('',{users:"Jusu",roles:"administrator"})
})



router.get("/admin", (req,res)=>{

})
module.exports=router