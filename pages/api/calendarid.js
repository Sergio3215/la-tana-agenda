import nextConnect from 'next-connect';
import middleware from '../../database/db';
let ObjectId = require('mongodb').ObjectID;

const handler = nextConnect();

//http://localhost:3000/api/calendar

handler.use(middleware);

handler.update(async (req, res) => {
    const{id, allow, user} = req.query;
    let doc = await req.db.collection('Calendar').findOne(new ObjectId(id));
    console.log(doc);
    res.status(200).json({doc:doc });
});

handler.post(async (req, res) => {
    const { day, index, hour, user, allow } = req.query;
    console.log(req.query)
    let doc = await req.db.collection('Calendar').insertOne(
        {
            day: day,
            index: index,
            hour: hour,
            user: user,
            allow: allow
        }
    );
    console.log(doc);
    res.status(200).json({ status: "sucess" });
});
export default handler;