import React from 'react';

export default class App extends React.Component {

    constructor() {
        super();

    }

    render(){
        return (
            <div>
                <div>header</div>
                <div>body {this.props.id}</div>
                <div>footer</div>
            </div>
        )
    }

}