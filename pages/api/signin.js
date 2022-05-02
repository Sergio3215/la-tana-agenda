import firebase from '../../database/db';



// export default async function handlerCreate(req, res) {
//     const { user, password, email, name, lastname} = req.query;

//   const newUser = await firebase.db.collection("User").add({
//         user:user,
//         password:password,
//         email: email,
//         admin: false,
//         name: name,
//         lastname:lastname
//     })
    
//     res.status(200).json({ status: true });

// }
import nextConnect from 'next-connect';
import middleware from '../../database/db';

const handler = nextConnect();

//http://localhost:3000/api/signin?user=usernamefake&password=1&email=example@example.com&name=artur&lastname=jinzo

handler.use(middleware);
handler.get(async (req, res) => {
    const { user, password, email, name, lastname} = req.query;
    console.log(req.query)
    let doc = await req.db.collection('User').insertOne(
        { 
            user: user, 
            password : password, 
            email : email, 
            name:name, 
            lastname:lastname,
            admin : false,
            mod : false
        }
    );
    console.log(doc);
    res.status(200).json({status:"sucess"});
});
export default handler;