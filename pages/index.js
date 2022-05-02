import React from 'react';

import Header from '../Components/header'
import Body from '../Components/body'

export default class App extends React.Component {
    constructor() {
        super();
        this.getStorage = this.getStorage.bind(this);

        this.state={
            user: false,
            data:[]
        }
    }

    componentDidMount(){
        this.getUserData();
    }

    async getStorage() {
        fetch("/api/cookie")
            .then(res => res.json())
            .then(data => {
                this.setState({ 
                    user: data.status 
                }, () => this.forceUpdate());
            });
    }

    async getUserData(){
        let strfetch = await fetch("/api/userid");
        let res  = await strfetch.json();
        this.setState({ 
            data: res
        }, () => this.forceUpdate());
    }

    render(){
        return (
            <div>
                <div><Header getStorage={this.getStorage}/></div>
                <div><Body getStorage={this.getStorage} user={this.state.user}
                getUserData={this.getUserData.bind(this)} data={this.state.data.data}/></div>
            </div>
        )
    }
}