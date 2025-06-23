const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const {registerCaptain} =  require('../controller/captain.register')

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

module.exports = router;
