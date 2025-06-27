const { validationResult } = require("express-validator");
const usermodel = require("../models/user_model");
const createuser = require("../services/create.user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const blacklistmodel = require('../models/blacklist.model')


const registeruser = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { fullname, email, password } = req.body;

    const alreadyregistered =await usermodel.findOne({email});
    if(alreadyregistered) return res.status(400).json({
      message:"email already regitered"
    });

    const hashedpassword = await bcrypt.hash(password, 10);

    const user = await createuser({
      firstname: fullname.firstname,
      lastname: fullname.lastname,
      email,
      password: hashedpassword,
    });

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    res.cookie('token', token);
    res.status(201).json({ token, user });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


const loginuser = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {email, password } = req.body;
    const user  = await usermodel.findOne({email}).select('+password');;
   if(!user){
    return res.status(401).json({message:"invalid password or email"})
   }

   const checkpass = await bcrypt.compare(password,user.password);
   console.log(checkpass)
    if(!checkpass)  return res.status(401).json({message:"invalid password or email"})

     const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET); 
      res.cookie('token',token);
      res.status(201).json({ token, user });
  
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const userprofile = (req,res,next) =>{
  return res.status(201).json(req.user);
}

const logout = async(req,res,next) =>{
      const token = req.cookies.token || req.headers.authorization;
       res.clearCookie('token');
       const toke = await blacklistmodel.create({'token':token})
       res.status(201).json({message:"logout successfull"})

}

module.exports = {loginuser,logout,registeruser,userprofile};
