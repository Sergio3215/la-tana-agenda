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
        if (PrevProps.data != this.props.data) {
            this.allUser();
        }
    }

    componentDidMount() {
        this.allUser();
    }

    allUser() {
        let idSelected= '1';
        console.log(this.props.data)
                let component = [];
                let allow = false
                    let doc = this.props.data;
                if(doc.data != undefined) {
                doc.data.forEach((r) => {
                    if (r.name + " " + r.lastname == this.props.data.lastuser && doc.allow) {
                    console.log(this.props.data.lastuser)
                    idSelected=r._id;
                        component.push(<option value={r._id} selected>{this.props.data.lastuser}</option>);
                    }
                    else {
                        component.push(<option value={r._id}>{r.name + " " + r.lastname}</option>);
                    }
                    allow = doc.allow;
                });

                this.setState({
                    componentUsers: component,
                    itemSelectedId: idSelected,
                    checked: !allow
                }, () => this.forceUpdate())
                }
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

    closeModal() {
        this.props.closeModal();
        this.setState({componentUsers:[]})
    }

    render() {
        return (
            <div className="modal-container" style={{ width: innerWidth - scrollX + "px", height: innerHeight - scrollY + "px" }}>
                <div>
                    <div className="modal-header">
                        <span>Asignar usuario o bloquear día </span>
                        <button onClick={this.closeModal.bind(this)}>X</button>
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