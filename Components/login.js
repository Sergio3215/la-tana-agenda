import React from 'react';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            password: "",
            error: ""
        }
    }

    async handleSumit(e) {
        e.preventDefault();
        if (this.state.name != "" && this.state.password != "") {
            let strFetch = await fetch(`/api/login?user=${this.state.name}&password=${this.state.password}`);
            let res = await strFetch.json();
            if (res.status == "failed") {
                this.setState({ error: res.errorMessage }, () => this.forceUpdate())
            }
            else {
                this.setState({ error: "" }, () => this.forceUpdate());
                this.props.getCookie(res);
            }
        }
    }

    handleInputName(e) {
        this.setState({ name: e.target.value }, () => this.forceUpdate())
    }

    handleInputPassword(e) {
        this.setState({ password: e.target.value }, () => this.forceUpdate())
    }

    render() {
        return (
            <form onSubmit={this.handleSumit.bind(this)} className="form--login">
                <div>
                    <label>Cuenta de usuario</label>
                    <input type="text" onChange={this.handleInputName.bind(this)} />
                </div>
                <div>
                    <label>Contraseña</label>
                    <input type="password" onChange={this.handleInputPassword.bind(this)} />
                </div>
                <div><label>{this.state.error}</label></div>
                <input type="submit" value="Iniciar sesion" style={{
                    cursor:'pointer'
                }}/>
            </form>
        )
    }
}