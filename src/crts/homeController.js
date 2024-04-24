// import multer from 'multer';
const path =require('path')
const multer =require('multer');
var appRoot = require('app-root-path');
const fs = require('node:fs');
const connection=require('../config/db');
const {getdata, getID, updateBannerByID, 
create_data, delete_data, getFilecontent,
getFilecontents
}=require('../services/crud'); //import from crud to do querry

const getHomepage =async (req,res)=>{
    
    let kq =await getdata();
    let data =getFilecontents(kq);
    res.render('postdata.ejs', {listBanners: kq,Datas: data})
}

const getFriday =(req,res)=>{
    res.render('vd.ejs')
}

const create_banners= async (req,res)=>{
    let ID = req.body.fID;
    let textname= ID +".txt";
    let name =textname;
    let img = req.file.filename;
    let content=req.body.fname;
    let tablename ='banners';
    await create_data(tablename,ID,name,img,textname,content);
    
   

    // upload(req, res, function (err) {
    //     // req.file contains information of uploaded file
    //     // req.body contains information of text fields, if there were any

    //     if (req.fileValidationError) {
    //         return res.send(req.fileValidationError);
    //     }
    //     else if (!req.file) {
    //         return res.send('Please select an image to upload');
    //     }
    //     else if (err instanceof multer.MulterError) {
    //         return res.send(err);
    //     }
    //     else if (err) {
    //         return res.send(err);
    //     }

    //      
    // });
    res.redirect('/'); 
      
}

const  getUpDatePage =async (req,res)=>{
    const bannerid = req.params.bannerid;
    
    let tablename ='banners';
   let bannerids = await getID(tablename,bannerid);
   let contnets= getFilecontent(bannerids);
   
    res.render('edit.ejs', {banneredit : bannerids, Contents: contnets});
}
const postUpDateBanner= async (req,res)=>{
    let ID = req.body.fID;
    let name =req.body.fname;
    let img = req.file.filename;
    let tb='banners';
   await updateBannerByID(tb,ID,name,img);
       
    res.redirect('/');
}
const postDeleteBanner = async(req,res)=>{
    const bannerid = req.params.bannerid;
    let tablename ='banners';
    let bannerids = await getID(tablename,bannerid);
    res.render('delete.ejs',{banneredit : bannerids});
}
const DeleteBanner = async(req,res)=>{
    let ID = req.params.bannerid;
    let tablename ='banners';
    let delid='bannerid';
    await delete_data( tablename,delid,ID);
    res.redirect('/');
}


module.exports = {
   
    getHomepage, getFriday,create_banners, getUpDatePage,postUpDateBanner, postDeleteBanner, DeleteBanner
}