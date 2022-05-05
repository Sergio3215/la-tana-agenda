import React from 'react';

export default class App extends React.Component {

    constructor() {
        super();
        this.allUser = this.allUser.bind(this);
        this.state = {
            componentUsers: [],
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
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div>
                        Asignar usuario o bloquear día <button>X</button>
                    </div>
                    <div>
                        body {this.props.id}
                        <select>
                            {
                                this.state.componentUsers
                            }
                        </select>
                    </div>
                    <div>
                        <input type="submit" value='Guardar' />
                    </div>
                </form>
            </div>
        )
    }

}