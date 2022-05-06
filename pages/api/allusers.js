import nextConnect from 'next-connect';
import middleware from '../../database/db';
let ObjectId = require('mongodb').ObjectID;

const handler = nextConnect();
handler.use(middleware);

//http://localhost:3000/api/allusers

handler.get(async (req, res) => {
    const {id} = req.query;
    console.log(id)
    let last = await req.db.collection('Calendar').findOne(new ObjectId(id));
    let doc = await req.db.collection('User').find().sort({name:1}).toArray();
    res.status(200).json({ status: "sucess", data: doc, lastuser:last.user});
});
export default handler;