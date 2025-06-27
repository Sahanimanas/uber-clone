const express = require("express");
const { body, validationResult } = require("express-validator");
const captainmodel = require("../models/captain.model")
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')
require('dotenv').config

const registerCaptain = async (req, res,next) => {
  try {
    // console.log( "request body",req.body)
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, fullname, password, vehicle, status } = req.body;
    if (!email || !fullname || !password || !vehicle || !status) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const alreadyExists = await captainmodel.findOne({ email });

    if (alreadyExists) {
      return res.status(400).json({ message: "Email already exists" });
    }
    const hashedpassword = await bcrypt.hash(password,10);
    if (!hashedpassword) {
      return res.status(500).json({ message: "Failed to hash password" })
    }
   const newCaptain = await captainmodel.create({
  fullname: {
    firstname: fullname.firstname,
    lastname: fullname.lastname
  },
  email,
  password: hashedpassword,
  vehicle: {
    vehicleType: vehicle.vehicleType,
    capacity: vehicle.capacity,
    plate: vehicle.plate,
    color: vehicle.color
  },
  status
});

    if (!newCaptain) {
      return res.status(500).json({ message: "Failed to register captain" });
    }   
    res.status(201).json({
      message: "Captain registered successfully",
      captain: {
        email,
        fullname,
       vehicle ,
        status
      },
    });
  } catch (error) {
    console.error("Error registering captain:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const loginCaptain = async (req, res, next) => {
  try { 
    const errors = validationResult(req);
   if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {email,password} =  req.body;
    const user = await captainmodel.findOne({email}).select('+password');
    if(!user){
      return res.status(404).json({message:"user not found"})
    }

   
    const checkpass=  await bcrypt.compare(password, user.password);
    if(!checkpass){
      return res.status(401).json({message:"unauthorised access"});
    }

    const token = jwt.sign({id:user._id},process.env.JWT_SECRET);
    res.cookie('token',token)
    if(!token){
      return res.status(500).json({message:"Token error"})
    }
    return res.status(200).json({
      token,user
    })

  }catch(err) {
    res.status(500).json({message:"internal server error"})
  }

}


module.exports = {registerCaptain,loginCaptain};
