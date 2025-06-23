const express = require('express');
const cors = require('cors')
require('dotenv').config();
const app = express();
const user_route = require('./routes/user.route');
const captain_route = require('./routes/captain.route');

const cookieParser = require('cookie-parser');

app.use(cors());
app.use(express.json())
app.use(cookieParser())
app.use('/users',user_route)    
app.use('/captain',captain_route)

app.get('/',(req,res)=>{
    res.send('api working file')
})



module.exports = app

