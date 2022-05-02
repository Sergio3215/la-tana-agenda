import React, { useEffect } from 'react';

import Login from "./login"
import Home from "./home"

export default class App extends React.Component {
    constructor() {
        super();

        this.getCookie = this.getCookie.bind(this);

        this.state = {
            id: "",
            name: "",
            lastname: "",
            admin: false,
            mod: false
        }
    }

    componentDidUpdate(PrevProps) {
        if (this.props.data != null || this.props.data != undefined) {
            if (this.props.data != PrevProps.data) {
                this.setState({
                    id: this.props.data.id,
                    name: this.props.data.name,
                    lastname: this.props.data.lastname,
                    admin: this.props.data.admin,
                    mod: this.props.data.mod
                }, () => { this.forceUpdate(); this.props.getStorage(); })
            }
        }
    }

    componentDidMount() {
        this.props.getStorage();
        this.props.getUserData();
    }

    async getCookie(data) {
        let fetchstr = await fetch("/api/cookie?id=" + data.id, {
            method: 'POST'
        });
        this.setState({
            id: data.id,
            name: data.name,
            lastname: data.lastname,
            admin: data.admin,
            mod: data.mod
        }, () => { this.forceUpdate(); this.props.getStorage(); })
    }

    render() {
        return (
            <div>
                {
                    (!this.props.user) ?
                        <Login getCookie={this.getCookie} />
                        :
                        <Home id={this.state.id} name={this.state.name} lastname={this.state.lastname}
                            admin={this.state.admin} mod={this.state.mod} />
                }
            </div>
        )
    }
}