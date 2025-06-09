const user = require('../models/user_model')
const {body} = require('express-validator')
const express = require('express');
const auth = require('../middleware/auth')
const router = express.Router()
const {registeruser,loginuser,logout,userprofile} = require('../controller/user.register')

router.post('/register',[
    body('email').isEmail().withMessage('invalid email'),
    body('fullname.firstname').isLength({min:3}).withMessage("must be length 3"),
    body('fullname.lastname').isLength({min:3}).withMessage("must be length 3"),
    body('password').isLength({min:6}).withMessage('minimum of 6 length'),
],registeruser)


router.post('/login',[
    body('email').isEmail().withMessage('invalid email'),   
    body('password').isLength({min:6}).withMessage('minimum of 6 length'),
],loginuser )


router.get('/userprofile',auth,userprofile)

router.post('/logout',logout)

module.exports = router
