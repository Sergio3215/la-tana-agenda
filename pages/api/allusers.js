import nextConnect from 'next-connect';
import middleware from '../../database/db';

const handler = nextConnect();
handler.use(middleware);

//http://localhost:3000/api/allusers

handler.get(async (req, res) => {
    let doc = await req.db.collection('User').find().sort({name:1}).toArray();
    res.status(200).json({ status: "sucess", data: doc});
});
export default handler;