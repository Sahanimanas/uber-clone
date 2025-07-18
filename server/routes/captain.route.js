const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const {registerCaptain,loginCaptain} =  require('../controller/captain.register')
const {userprofile,logout} = require('../controller/user.register')
const cap_auth = require('../middleware/cap_auth')

router.post('/register',
     [
    body('email').isEmail().withMessage('invalid email'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage("must be length 3"),
    body('fullname.lastname').isLength({ min: 3 }).withMessage("must be length 3"),
    body('password').isLength({ min: 6 }).withMessage('minimum of 6 length'),
    body('vehicle.color').isLength({ min: 3 }).withMessage('must be valid color'),
    body('vehicle.plate').isLength({ min: 3 }).withMessage('must be valid plate'),
     body('vehicle.capacity').isInt({ min: 1 }).withMessage('must be at least 1'),
    body('vehicle.vehicleType').isIn(['car', 'fourwheeler', 'auto']).withMessage('must be one of car, fourwheeler, auto')
],
 registerCaptain);

 router.post('/login',
       [ body('email').isEmail().withMessage('invalid email'),
         body('password').isLength({ min: 6 }).withMessage('minimum of 6 length')],
         loginCaptain
        )

router.get('/getcaptain',cap_auth,userprofile)  ;

router.post('/logout',logout)

module.exports = router;
