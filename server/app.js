const express = require('express');
const cors = require('cors')
require('dotenv').config();
const app = express();
const router = require('./routes/authroute')

app.use(cors());
app.use(express.json())

app.use('/api/v2',router)

app.get('/',(req,res)=>{
    res.send('api working file')
})



module.exports = app

