import React from 'react';

export default class App extends React.Component {

    constructor() {
        super();
        this.allUser = this.allUser.bind(this);
        this.state = {
            componentUsers: [],
            checked: false,
            itemSelectedId:''
        }
    }

    componentDidMount() {
        this.allUser();
    }

    allUser() {
        fetch('/api/allusers').then(res => res.json())
            .then(doc => {
                console.log(doc)
                let component = [];
                doc.data.forEach((r) => {
                    console.log(r)
                    component.push(<option value={r._id}>{r.name + " " + r.lastname}</option>);
                });

                this.setState({
                    componentUsers: component
                }, () => this.forceUpdate())
            })

    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.arrayCalendar(9, 23);
    }

    handleCheckbox(e){
        this.setState({
            checked: e.target.checked
        },()=>this.forceUpdate());
    }

    handleSelect(e){
        this.setState({
            itemSelectedId: e.target.value
        },()=>this.forceUpdate());
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div>
                        Asignar usuario o bloquear día <button onClick={this.props.closeModal}>X</button>
                    </div>
                    <div>
                        Asignar usuario
                        <select key={this.props.id} onChange={this.handleSelect.bind(this)}>
                            {
                                this.state.componentUsers
                            }
                        </select>
                        <div>
                            <label>Bloquear dia</label>
                            <input type="checkbox" onChange={this.handleCheckbox.bind(this)}/>
                        </div>
                    </div>
                    <div>
                        <input type="submit" value='Guardar' />
                    </div>
                </form>
            </div>
        )
    }

}