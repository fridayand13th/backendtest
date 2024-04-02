const express =require('express')
const router=express.Router()
const { getHomepage,getFriday,posttest, getUpDatePage,postUpDateBanner,
    postDeleteBanner}=require('../crts/homeController');

router.get('/', getHomepage)
router.get('/update/:bannerid', getUpDatePage)
router.get('/friday', getFriday)
router.post('/test', posttest)
router.post('/edit-banner', postUpDateBanner)
router.get('/delete-banner/:bannerid', postDeleteBanner)
module.exports = router;