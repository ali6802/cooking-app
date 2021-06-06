const express = require('express')
require('dotenv').config()
const routes = require('./routes/routes')
const path = require('path')

const port = process.env.PORT || 3000
const app = express()

app.set('view engine','ejs')
const publicDirectoryPath = path.join(__dirname,'../public')
app.use(express.static(publicDirectoryPath))
app.use('',routes)

app.listen(port, ()=>{
   console.log('App is listening on port '+port)
})