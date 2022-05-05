import nextConnect from 'next-connect';
import middleware from '../../database/db';
let ObjectId = require('mongodb').ObjectID;

const handler = nextConnect();

//http://localhost:3000/api/setCalendarFalse

handler.use(middleware);

handler.get(async (req, res) => {
    let doc = await req.db.collection('Calendar').updateMany({},{$set:{allow:false}});
    console.log(doc);
    res.status(200).json({status:"ok"});
});

export default handler;