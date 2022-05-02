import { getCookies, getCookie, setCookies, removeCookies } from 'cookies-next';
import nextConnect from 'next-connect';

const handler = nextConnect();

handler.get(async (req, res) => {
   const cookies = getCookie("account",{req,res});
   if(cookies != undefined){
    res.status(200).json({status:true})
   }
   else{
    res.status(200).json({status:false})
   }
});

const startID = "aslkd91adlka92nal";
const endID = "qwepo1occn1dmka1";

//http://localhost:3000/api/setCookie?id=2

handler.post(async (req, res) => {
   const{id} = req.query;
   if(id != undefined){
      removeCookies("account",{req,res})
      setCookies("account",{id:startID+id+endID},{req,res,maxAge:60*60*24});
      const cookies = getCookie("account",{req,res})
      if(cookies != undefined){
       res.status(200).json({status:true})
      }
      else{
       res.status(200).json({status:false})
      }
   }
   else{
    res.status(200).json({status:false})
   }
});

handler.delete((req,res) => {
    removeCookies("account",{req,res});
    res.status(200).json({status:false})
})

export default handler;