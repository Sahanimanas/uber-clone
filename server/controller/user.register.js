const {validationResult} = require('express-validator')
const usermodel = require('../models/user_model')
const createuser = require('../services/create.user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const registeruser =async (req,res,next)=>{
    
    try{ 

    const errors = validationResult(req)
     
     if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
     }

     const {fullname,email,password} = req.body;
     
     const hashedpassword = await bcrypt.hash(password,10);
      

     const user = await createuser({
     
           firstname: fullname.firstname,
      lastname:fullname.lastname,
        email,
        password:hashedpassword
     })
   
   const token =  jwt.sign({_id:this._id}, process.env.JWT_SECRET)


    
     res.status(201).json({token,user})

    }catch(error){
        res.status(500).json({
            message:error.message
        })
    }
}
module.exports =registeruser