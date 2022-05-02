import React from 'react';

export default class App extends React.Component {
    constructor() {
        super();
    }

    render(){
        return (
            <div>
                <h1>Bienvenido {this.props.name} {this.props.lastname}</h1>
                {
                    (this.props.Admin)? 
                    <h1>Soy pro</h1>
                    :
                    <h1>No soy pro</h1>
                }
            </div>
        )
    }
}