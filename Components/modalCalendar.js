import React from 'react';

export default class App extends React.Component {

    constructor() {
        super();
        this.allUser = this.allUser.bind(this);
        this.state = {
            componentUsers: [],
            checked: false,
            itemSelectedId: '1'
        }
    }

    componentDidUpdate(PrevProps) {
        if (PrevProps.id != this.props.id) {
            this.allUser();
        }
    }

    componentDidMount() {
        this.allUser();
    }

    allUser() {
        fetch('/api/allusers?id=' + this.props.id).then(res => res.json())
            .then(doc => {
                console.log(doc)
                let component = [];
                let allow = false
                doc.data.forEach((r) => {
                    console.log(r)
                    if (r.name + " " + r.lastname == doc.lastuser) {
                        component.push(<option value={r._id} select='selected'>{r.name + " " + r.lastname}</option>);
                    }
                    else {
                        component.push(<option value={r._id}>{r.name + " " + r.lastname}</option>);
                    }
                    allow = doc.allow;
                });

                this.setState({
                    componentUsers: component,
                    itemSelectedId: '1',
                    checked: !allow
                }, () => this.forceUpdate())
            })

    }

    async handleSubmit(e) {
        e.preventDefault();
        let userParams = ''
        if (this.state.itemSelectedId != "1") {
            userParams = `userid=${this.state.itemSelectedId}&`;
        }
        let strfetch = await fetch(`/api/calendarid?${userParams}allow=${!this.state.checked}&id=${this.props.id}`, { method: 'PUT' });
        let res = await strfetch.json();

        this.props.arrayCalendar(9, 23);
        this.props.closeModal();
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
            <div className="modal-container" style={{ width: innerWidth - scrollX + "px", height: innerHeight - scrollY + "px" }}>
                <div>
                    <div className="modal-header">
                        <span>Asignar usuario o bloquear día </span>
                        <button onClick={this.props.closeModal}>X</button>
                    </div>
                    <form onSubmit={this.handleSubmit.bind(this)} className="modal-form">
                        <div className="modal-body">
                            <label>Asignar usuario</label>
                            {
                                (!this.state.checked) ?
                                    <select key={this.props.id} onChange={this.handleSelect.bind(this)}>
                                        <option value='1'>Selecciona un usuario</option>
                                        {
                                            this.state.componentUsers
                                        }
                                    </select> :

                                    <select key={this.props.id} disabled>
                                        <option value='1'>Selecciona un usuario</option>
                                        {
                                            this.state.componentUsers
                                        }
                                    </select>
                            }
                            <div>
                                <label>Bloquear dia</label>
                                <input type="checkbox" onChange={this.handleCheckbox.bind(this)} checked={this.state.checked} />
                            </div>
                        </div>
                        <div className="modal-footer">
                            {
                                (this.state.itemSelectedId == '1' && !this.state.checked) ?
                                    <input type="submit" value='Guardar' disabled /> :
                                    <input type="submit" value='Guardar' style={{ cursor: 'pointer' }} />
                            }
                        </div>
                    </form>
                </div>
            </div>
        )
    }

}