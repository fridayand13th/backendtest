const connection =require("../config/db");
const fs = require('node:fs');
const path =require('path')
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

const getFilecontent =(kq)=>{
    
    data = fs.readFileSync( path.join(__dirname,"../content",kq.BannerName), 'utf8');
    
    return data;
}
const getFilecontents =(kq) =>{
    let data = [];
    for(let i=0;i<kq.length;i++){
         data[i] = getFilecontent(kq[i]);
    }
    return data;
}
const updateBannerByID= async (tb,ID,name,img) =>{
    let sj=ID +".txt"
    fs.writeFileSync(path.join(__dirname,"../content",sj),name);
    let [kq, flied]= await connection.query(
        `UPDATE ?? 
         SET  BannerImg=? 
         
        `,[tb,ID,img,ID]);
}

const create_data =async (tablename,ID,name,img,textname,content) =>{
    fs.writeFileSync(path.join(__dirname,"../content",textname), content,"UTF8")
    let [kq, flied]= await connection.query(`INSERT INTO ?? VALUES(?,?,?)`,[tablename,ID,name,img]);
}
const delete_data =async (tablename,delid,ID) =>{
    let textname=ID+".txt";
    fs.unlinkSync(path.join(__dirname,"../content",textname));
    let [img,flied]=await connection.query(`select BannerImg from ?? WHERE ??=?`,[tablename,delid,ID]);
    //console.log(img[0].BannerImg);
    fs.unlinkSync(path.join(__dirname,"../public/img",img[0].BannerImg));
     await connection.query(`DELETE FROM ?? WHERE ?? =?`,[tablename,delid,ID]);
}
module.exports={
    getdata, getID, updateBannerByID, create_data, delete_data, getFilecontent,getFilecontents
}