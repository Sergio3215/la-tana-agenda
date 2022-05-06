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
                <h1>La Tana</h1>
                <div>
                {
                    (this.props.user)?
                    <button className="bnt--logout bg-indigo-900" onClick={this.Logout.bind(this)}>desloguearse</button>
                    : <div></div>
                }
                </div>
            </div>
        )
    }
}