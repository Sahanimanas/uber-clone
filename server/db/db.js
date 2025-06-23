const mongoose = require('mongoose');
require('dotenv').config();
const dbconnect = ()=>{
    mongoose.connect(process.env.MONGOURL,{} )
    .then(()=>(console.log('connected to db'))).
    catch((error)=>{
        console.log(error)
    })
    
}

module.exports = dbconnect