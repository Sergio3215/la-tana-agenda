import firebase from '../../database/firebase';

//http://localhost:3000/api/login?user=joi&password=%271%27

export default function handlerGet(req, res) {
    const { user, password } = req.query;

    let data = [];
    firebase.db.collection("User").onSnapshot(query => {
        query.docs.forEach(d => {
            data.push({
                id: d.id,
                users: d.data().user,
                password: d.data().password,
                admin:d.data().admin
            })
        })
        console.log(data)
    })

    const {users,id,passwords,admin} = data;
    // console.log(user == data.user)
    if(user == users && password == passwords) {
        res.status(200).json({ status: true, id: data.id, admin:admin });
    }
    else{
        res.status(200).json({ status: false});
    }

}