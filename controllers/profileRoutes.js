const router = require('express').Router();
const User = require('../models/User');


//http://localhost:3001/profile/admin
router.get("/admin", (req,res)=>{

res.render('',{users:"Jusu",roles:"administrator"})
})

//http://localhost:3001/profile/user

router.get("/admin", (req,res)=>{

})
module.exports=router