import nextConnect from 'next-connect';
import middleware from '../../database/db';
let ObjectId = require('mongodb').ObjectID;

const handler = nextConnect();

//http://localhost:3000/api/calendar

handler.use(middleware);

handler.put(async (req, res) => {
    const{id, allow} = req.query;
    console.log(req.query.userid)
    let userName = '';
    if(req.query.userid != undefined){
        let user = await req.db.collection('User').findOne(new ObjectId(req.query.userid));
        userName = user.name + " " + user.lastname;
    }
    else{
        userName = "usuario no asignado"
    }

    let allowParam = false;
    if(allow == 'true'){
        allowParam = true;
    }
    await req.db.collection('Calendar').updateOne({_id:new ObjectId(id)}, {$set:{user:userName, allow:allowParam}});

    res.status(200).json({status:"ok"});
});

export default handler;