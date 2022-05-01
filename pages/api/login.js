import nextConnect from 'next-connect';
import middleware from '../../database/db';

const handler = nextConnect();

//http://localhost:3000/api/login?user=joi&password=1

handler.use(middleware);
handler.get(async (req, res) => {
    const { user, password} = req.query;
    console.log(req.query)
    let doc = await req.db.collection('User').findOne()
    console.log(doc);
    if(doc.user == user && doc.password == password){
        res.status(200).json({status:"sucess", id:doc._id, user:doc.user, name:doc.name,lastname:doc.lastname, admin:doc.admin});
    }
    else{
        res.status(200).json({status:"failed"});
    }
});
export default handler;