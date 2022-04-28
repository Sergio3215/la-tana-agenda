import React from 'react';

import Header from '../Components/header'
import Body from '../Components/body'

export default class App extends React.Component {
    constructor() {
        super();
    }

    render(){
        return (
            <div>
                <div><Header/></div>
                <div><Body/></div>
            </div>
        )
    }
}