const http = require('http')
const app = require('./app')
const dbconnect = require('./db/db')

const server = http.createServer(app)
require('dotenv').config();

dbconnect();

server.listen(process.env.PORT,()=>{
    console.log(`server listen at ${process.env.PORT}`)
})