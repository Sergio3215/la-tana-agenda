import nextConnect from 'next-connect';
import middleware from '../../database/db';

const handler = nextConnect();

//http://localhost:3000/api/calendar

handler.use(middleware);

handler.get(async (req, res) => {
    let doc = await req.db.collection('Calendar').find().toArray();
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