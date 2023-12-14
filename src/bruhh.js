//#20
const express = require('express')
const app = express()
const port = 3000
const path =require('path')

app.set('views', path.join(__dirname,'views'))
app.set('view engine','ejs')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/friday', (req, res) => {
    res.render('vd.ejs')
  })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})