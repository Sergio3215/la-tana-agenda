import React from 'react';
import ModalCalendar from './modalCalendar'

export default class App extends React.Component {
    constructor() {
        super();
        this.createUser = this.createUser.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.state = {
            arrDay: [],
            arrHour: [],
            onlyHour: [],
            components: [],
            id: '',
            displayModal: 'none'
        }
    }

    componentDidMount() {
        this.arrayCalendar(9, 23);
    }

    async arrayCalendar(min, max) {
        let arrDays = ["", "Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
        let arrHour = [];

        let intervals = [];
        for (let ii = min; ii <= max; ii++) {
            intervals.push(ii);
        }

        let strfetch = await fetch('/api/calendar')
        let result = await strfetch.json();
        console.log(result.doc)
        if (result.doc.length <= 0) {
            intervals.map(inter => {
                arrDays.map((ad, index) => {
                    if (index != 0) {
                        arrHour.push({
                            day: ad,
                            index: index,
                            hour: inter + ":00",
                            user: "",
                            allow: false
                        })
                    }
                })
                arrHour.map(h => {
                    if (h.hour == inter + ":00") {
                        arrHour.push({
                            day: h.day,
                            index: h.index,
                            hour: inter + ":30",
                            user: "",
                            allow: false
                        })
                    }
                })
            })

            arrHour.map(async (h) => {
                strfetch = await fetch(`/api/calendar?day=${h.day}&index=${h.index}&hour=${h.hour}&user=${h.user}&allow=${h.allow}`, {
                    method: 'POST'
                });
            })
        }
        else {
            // arrHour = result.doc;
            let onlyHour = [];
            intervals.map(h => {
                onlyHour.push(h + ":00")
                onlyHour.push(h + ":30")
            });
            result.doc.map(res => {
                onlyHour.map(only => {
                    arrDays.map(d => {
                        // debugger
                        if (res.hour == only && res.day == d) {
                            arrHour.push(res);
                        }
                    })
                })
            }
            )
        }


        let onlyHour = [];
        intervals.map(h => {
            onlyHour.push(h + ":00")
            onlyHour.push(h + ":30")
        });

        // console.log(arrHour);

        let components = this.createUser(arrHour, onlyHour)

        this.setState({
            arrDay: arrDays,
            arrHour: arrHour,
            onlyHour: onlyHour,
            components: components
        }, () => this.forceUpdate())
    }

    handleModal(e) {
        this.setState({
            id: e.target.value,
            displayModal: 'block'
        }, () => this.forceUpdate())
    }

    closeModal() {
        this.setState({
            id: '',
            displayModal: 'none'
        }, () => this.forceUpdate())
    }

    createUser(arrHour, onlyHour) {
        let component = []
        onlyHour.map((h, indexHour) => {

            console.log("1")
            component.push(<tr>
                <td>{h}</td>
                {
                    arrHour.map(d => {
                        let id = '';
                        return ((d.hour == h) ?
                            <td>
                                {
                                    (!d.allow) ?
                                        "X"
                                        : (d.user != "") ?
                                            d.user : "usuario no asignado"
                                }
                                {
                                    (this.props.admin) ?

                                            <button value={d._id} key={d.hour + "-" + d.day} onClick={this.handleModal.bind(this)}>Modificar {d.hour + " - " + d.day}</button> : null
                                }
                            </td>
                            :
                            null)
                    })
                }
            </tr>)
        })
        return component;
    }

    render() {
        let count = 0;
        return (
            <div>
                {/* <h1>Bienvenido {this.props.name} {this.props.lastname}</h1> */}
                <div style={{ display: this.state.displayModal }}><ModalCalendar id={this.state.id} closeModal={this.closeModal} arrayCalendar={this.arrayCalendar.bind(this)}/></div>
                {
                    // (this.props.admin) ?
                    //     <h1>Soy pro</h1>
                    //     :
                    //     <h1>No soy pro</h1>
                }
                <table border="1">
                    <thead>
                        <tr>
                            {
                                this.state.arrDay.map(d => <td>{d}</td>)
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.components
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}