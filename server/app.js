const express = require('express');
const cors = require('cors')
require('dotenv').config();
const app = express();
const router = require('./routes/user.route');
const cookieParser = require('cookie-parser');

app.use(cors());
app.use(express.json())
app.use(cookieParser())
app.use('/users',router)    

app.get('/',(req,res)=>{
    res.send('api working file')
})



module.exports = app

