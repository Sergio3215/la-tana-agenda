import React from 'react';

export default class App extends React.Component {
    constructor() {
        super();
        this.state={
            name:"",
            password:""
        }
    }

    handleSumit(e){
        e.preventDefault();
    }

    handleInputName(e){
        this.setState({name:e.value},()=>this.forceUpdate())
    }

    handleInputPassword(e){
        this.setState({password:e.value},()=>this.forceUpdate())
    }

    render(){
        return (
            <form onSubmit={this.handleSumit.bind(this)}>
                <div>
                <label>Cuenta de usuario</label>
                <input type="text" onChange={this.handleInputName.bind(this)}/>
                </div>
                <div>
                <label>Contraseña</label>
                <input type="text" onChange={this.handleInputPassword.bind(this)}/>
                </div>
                <input type="submit"/>
            </form>
        )
    }
}