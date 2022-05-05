import React from 'react';

export default class App extends React.Component {

    constructor() {
        super();
        this.allUser = this.allUser.bind(this);
        this.state = {
            componentUsers: [],
            checked: false,
            itemSelectedId: ''
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
                    componentUsers: component,
                    itemSelectedId:'',
                    checked: false
                }, () => this.forceUpdate())
            })

    }

    async handleSubmit(e) {
        e.preventDefault();
        let strfetch = await fetch(`http://localhost:3000/api/calendarid?userid=${this.state.itemSelectedId}&allow=${!this.state.checked}&id=${this.props.id}`,{method: 'PUT'});
        let res = await strfetch.json();
        
        this.props.arrayCalendar(9, 23);
    }

    handleCheckbox(e) {
        this.setState({
            checked: e.target.checked
        }, () => this.forceUpdate());
    }

    handleSelect(e) {
        this.setState({
            itemSelectedId: e.target.value
        }, () => this.forceUpdate());
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
                        {
                            (!this.state.checked) ?
                                <select key={this.props.id} onChange={this.handleSelect.bind(this)}>
                                    <option value=''>Selecciona un usuario</option>
                                    {
                                        this.state.componentUsers
                                    }
                                </select> :

                                <select key={this.props.id} disabled>
                                    <option value=''>Selecciona un usuario</option>
                                    {
                                        this.state.componentUsers
                                    }
                                </select>
                        }
                        <div>
                            <label>Bloquear dia</label>
                            <input type="checkbox" onChange={this.handleCheckbox.bind(this)} />
                        </div>
                    </div>
                    <div>
                        {
                            (this.state.itemSelectedId == '' && !this.state.checked) ?
                                <input type="submit" value='Guardar' disabled /> :
                                <input type="submit" value='Guardar' />
                        }
                    </div>
                </form>
            </div>
        )
    }

}