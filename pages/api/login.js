import nextConnect from 'next-connect';
import middleware from '../../database/db';

const handler = nextConnect();

//http://localhost:3000/api/login?user=joi&password=1
//http://localhost:3000/api/login?user=usernamefake&password=1

handler.use(middleware);
handler.get(async (req, res) => {
    const { user, password } = req.query;
    let doc = await req.db.collection('User').findOne({ user: user, password: password });
    if (doc != null) {
        res.status(200).json({ status: "sucess", id: doc._id, user: doc.user, name: doc.name, lastname: doc.lastname, admin: doc.admin, mod: doc.mod });
    }
    else {
        res.status(200).json({ status: "failed", errorMessage: "El usuario o la contraseña es incorrecto" });
    }
});
export default handler;