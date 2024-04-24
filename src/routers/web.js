const express =require('express')
const router=express.Router()


var appRoot = require('app-root-path');
const { getHomepage,getFriday,create_banners, getUpDatePage,postUpDateBanner,
    postDeleteBanner, DeleteBanner, uploadFile, getUploadFilePage}=require('../crts/homeController');
const {upload}=require('../midlleware/midlle');





router.get('/', getHomepage)
router.get('/update/:bannerid', getUpDatePage)
router.get('/friday', getFriday)
router.post('/create-banner',upload.single('flink'), create_banners)
router.post('/edit-banner', upload.single('flink'),postUpDateBanner)
router.get('/delete-banner/:bannerid', DeleteBanner)
//postDeleteBanner
router.get('/del-banner/:bannerid',DeleteBanner)

module.exports = router;