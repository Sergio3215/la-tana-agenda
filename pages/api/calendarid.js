import nextConnect from 'next-connect';
import middleware from '../../database/db';
let ObjectId = require('mongodb').ObjectID;

const handler = nextConnect();

//http://localhost:3000/api/calendar

handler.use(middleware);

handler.put(async (req, res) => {
    const{id, allow, userid} = req.query;
  
    let userName = '';
    if(userid!=null || userid != undefined || userid != ''){
        let user = await req.db.collection('User').findOne(new ObjectId(userid));
        userName = user.name + " " + user.lastname;
    }
    else{
        userName = "usuario no asignado"
    }

    let allowParam = false;
    if(allow == 'true'){
        allowParam = true;
    }

    let doc = await req.db.collection('Calendar').updateOne({_id:new ObjectId(id)}, {$set:{user:userName, allow:allowParam}});

    res.status(200).json({status:"ok"});
});

export default handler;