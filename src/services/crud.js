const connection =require("../config/db");
const getdata =async ()=>{
    let [kq,flied]= await connection.query(`select * from banners`);
    return kq;
}

const getID = async (tablename,bannerid) =>{
     //let kk="banners" //(use ?? to pass table name)
     let [kq,flied]= await connection.query(`select * from ?? where bannerid =?`,[tablename,bannerid]);
     //let [kq,flied]= await connection.query(`select * from banners where bannerid =?`,[bannerid]);
    let bannerids = kq && kq.length >0 ? kq[0]:{};
    return bannerids;
}
const updateBannerByID= async (ID,name,img) =>{
    let [kq, flied]= await connection.query(
        `UPDATE banners
         SET BannerID =?, BannerName=?, BannerImg=? 
        `,[ID,name,img]);
}
module.exports={
    getdata, getID, updateBannerByID
}