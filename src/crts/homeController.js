const connection=require('../config/db');
const {getdata, getID, updateBannerByID}=require('../services/crud'); //import from crud to do querry
const getHomepage =async (req,res)=>{
   
    let kq =await getdata();
    res.render('postdata.ejs', {listBanners: kq})
}

const getFriday =(req,res)=>{
    
    res.render('vd.ejs')
}
const  getUpDatePage =async (req,res)=>{
    const bannerid = req.params.bannerid;
    let tablename ='banners';
   let bannerids = await getID(tablename,bannerid);
    res.render('edit.ejs', {banneredit : bannerids});
}
const posttest= async (req,res)=>{
    let ID = req.body.fID;
    let name =req.body.fname;
    let img = req.body.flink
    
    let [kq, flied]= await connection.query(`INSERT INTO banners VALUES(?,?,?)`,[ID,name,img]);
       
    res.redirect('/');
}
const postUpDateBanner= async (req,res)=>{
    let ID = req.body.fID;
    let name =req.body.fname;
    let img = req.body.flink
    
   await updateBannerByID(ID,name,img);
       
    res.redirect('/');
}
const postDeleteBanner = async(req,res)=>{
    const bannerid = req.params.bannerid;
    let tablename ='banners';
    let bannerids = await getID(tablename,bannerid);
    res.render('delete.ejs',{banneredit : bannerids});
}
module.exports = {
    getHomepage, getFriday,posttest, getUpDatePage,postUpDateBanner, postDeleteBanner
}