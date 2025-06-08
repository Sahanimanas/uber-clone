const user = require('../models/user_model')
const {body} = require('express-validator')
const express = require('express');

const router = express.Router()
const registeruser = require('../controller/user.register')

router.post('/register',[
    body('email').isEmail().withMessage('invalid email'),
   
    body('password').isLength({min:6}).withMessage('minimum of 6 length'),
],
registeruser
)

module.exports = router