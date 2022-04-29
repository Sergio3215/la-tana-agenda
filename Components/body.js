import React, { useEffect } from 'react';

import Login from "../Components/login"
import Home from "./home"

let user = false;
function getStorage() {
    try {
        useEffect(() => {
            if (localStorage.getItem("User") != null) {
                user = true;
            }
        })
    }
    catch (e) {
        // console.log(e)
    }
}
function setStorage(id) {
        useEffect(() => {
            localStorage.setItem("User", [{"id":id}])
        })
}

export default class App extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        getStorage();
    }

    render() {
        return (
            <div>
                {
                    (user == false) ?
                        <Login setStorage={setStorage}/>
                        :
                        <Home />
                }
            </div>
        )
    }
}