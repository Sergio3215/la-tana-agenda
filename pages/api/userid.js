import nextConnect from 'next-connect';
import { getCookies, getCookie, setCookies, removeCookies } from 'cookies-next';
import middleware from '../../database/db';
let ObjectId = require('mongodb').ObjectID;

const handler = nextConnect();
handler.use(middleware);

//http://localhost:3000/api/login?user=joi&password=1
//http://localhost:3000/api/login?user=usernamefake&password=1

const startID = "aslkd91adlka92nal";
const endID = "qwepo1occn1dmka1";


handler.get(async (req, res) => {
    const cookies = getCookie("account",{req,res});
    console.log(req.query)
    const data = JSON.parse(cookies)
    const id = data.id.replace(startID,"").replace(endID,"")
    let doc = await req.db.collection('User').findOne(new ObjectId(id));
    res.status(200).json({ status: "sucess", data: doc});
});
export default handler;