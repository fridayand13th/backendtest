//#30
const express = require('express')
const app = express()
const port = 3000
const path =require('path')
const Router= require('./routers/web')

const configvieweng=require('./config/viewengine')

configvieweng(app)

app.use('/',Router)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})