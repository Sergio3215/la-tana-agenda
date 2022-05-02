import React from 'react';

export default class App extends React.Component {
    constructor() {
        super();
    }

    async Logout(){
        let fetchstr = await fetch("/api/cookie", {
            method: 'delete'
        });
        this.props.getStorage();
    }

    render(){
        return (
            <div>
                <h1>Esto es el header</h1>
                <button onClick={this.Logout.bind(this)}>desloguearse</button>
            </div>
        )
    }
}