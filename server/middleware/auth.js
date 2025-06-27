const jwt = require('jsonwebtoken')
const usermodel = require('../models/user_model')
const blacklistmodel = require('../models/blacklist.model')

const auth = async (req,res,next) =>{
 const token = req.cookies.token || req.headers.authorization.split(' ')[1];
 if(!token){
    return res.status(401).json({message:"unauthorised access"})
 }
const isBlacklisted = await blacklistmodel.findOne({'token':token})
if(isBlacklisted){
    return res.status(401).json({message:"unauthorised access"})
 }
 const decoded =  jwt.verify(token, process.env.JWT_SECRET);
 const user = await usermodel.findById(decoded.id);
 if(!user){
    return res.status(401).json({message:"unauthorised access"})
 }
// console.log(user)
 req.user = user;
 next();
}

module.exports = auth;