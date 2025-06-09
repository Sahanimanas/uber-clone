const express = require('express');
const router = express.Router();
const { body } = require('express-validator');


router.post('/captain/register', [
    body('email').isEmail().withMessage('invalid email'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage("must be length 3"),
    body('fullname.lastname').isLength({ min: 3 }).withMessage("must be length 3"),
    body('password').isLength({ min: 6 }).withMessage('minimum of 6 length'),
    body('vehicle.color').isLength({ min: 3 }).withMessage('must be valid color'),
    body('vehicle.plate').isLength({ min: 3 }).withMessage('must be valid plate'),
    body('vehicle.capacity').isNumeric().isGreaterThan(1).withMessage('must be numeric and greater than 1'),
    body('vehicle.vehicleType').isIn(['car', 'fourwheeler', 'auto']).withMessage('must be one of car, fourwheeler, auto')
], require('../controller/captain.register').registerCaptain);

modulke.exports = router;
