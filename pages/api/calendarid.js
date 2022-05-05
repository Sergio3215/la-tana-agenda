import nextConnect from 'next-connect';
import middleware from '../../database/db';
let ObjectId = require('mongodb').ObjectID;

const handler = nextConnect();

//http://localhost:3000/api/calendar

handler.use(middleware);

handler.put(async (req, res) => {
    const{id, allow, userid} = req.query;
    console.log(req.query);
  
    let userName = '';
    if(userid!=null || userid != undefined){
        let user = await req.db.collection('User').findOne(new ObjectId(userid));
        userName = user.name + " " + user.lastname;
    }
    console.log(allow);
    console.log(userName);
    let doc = await req.db.collection('Calendar').updateOne({_id:new ObjectId(id)}, {$set:{user:userName, allow:allow}});
    console.log(allow);
    res.status(200).json({status:"ok"});
});

export default handler;