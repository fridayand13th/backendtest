const express =require('express')
const router=express.Router()

router.get('/', (req, res) => {
res.send('May bo may la ai khoong')
  })
  
  router.get('/friday', (req, res) => {
      res.render('vd.ejs')
    })
module.exports = router;