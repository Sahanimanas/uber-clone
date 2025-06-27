const jwt = require('jsonwebtoken')
const captainmodel = require('../models/captain.model')
const blacklistmodel = require('../models/blacklist.model')

const cap_auth = async (req,res,next) =>{
    try{
 const token = req.cookies.token || req.headers.authorization;
 if(!token){
    return res.status(401).json({message:"unauthorised access"})
 }
const isBlacklisted = await blacklistmodel.findOne({'token':token})
if(isBlacklisted){
    return res.status(401).json({message:"unauthorised access"})
 }
 const decoded =  await jwt.verify(token, process.env.JWT_SECRET);

 const user = await captainmodel.findById(decoded.id);

 if(!user){
    return res.status(401).json({message:"unauthorised access"})
 }
console.log(user)
 req.user = user;
 next();

}
catch(err){
    return res.status(500).json({message:err.message})
}
}
module.exports = cap_auth;