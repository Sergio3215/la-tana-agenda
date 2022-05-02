import React from 'react';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            arrDay: [],
            arrHour: [],
            onlyHour: []
        }
    }

    componentDidMount() {
        this.arrayCalendar(9, 23);
    }

    arrayCalendar(min, max) {
        let arrDays = ["", "Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
        let arrHour = [];

        let intervals = [];
        for (let ii = min; ii <= max; ii++) {
            intervals.push(ii);
        }
        intervals.map(inter => {
            arrDays.map((ad, index) => {
                if (index != 0) {
                    arrHour.push({
                        day: ad,
                        index: index,
                        hour: inter + ":00",
                        user: "Jack",
                        allow: true
                    })
                }
            })
            arrHour.map(h => {
                if (h.hour == inter + ":00") {
                    arrHour.push({
                        day: h.day,
                        index: h.index,
                        hour: inter + ":30",
                        user: "Aloy",
                        allow: false
                    })
                }
            })
        })

        let onlyHour = [];
        intervals.map(h => {
            onlyHour.push(h + ":00")
            onlyHour.push(h + ":30")
        });

        console.log(arrHour)

        this.setState({
            arrDay: arrDays,
            arrHour: arrHour,
            onlyHour: onlyHour
        }, () => this.forceUpdate())
    }

    render() {
        return (
            <div>
                <h1>Bienvenido {this.props.name} {this.props.lastname}</h1>
                {
                    (this.props.admin) ?
                        <h1>Soy pro</h1>
                        :
                        <h1>No soy pro</h1>
                }
                <table border="1">
                    {
                        this.state.arrDay.map((d, index) => <td>
                            <td>{d}</td>
                            {
                                this.state.onlyHour.map(h => {
                                    return (
                                        <tr>
                                                {
                                                    (index == 0) ?
                                                        <td>{h}</td> : null
                                                }
                                                {
                                                    this.state.arrHour.map((h, indexHour) => {
                                                        return ((index === indexHour & index != 0) ? <td>{h.user}</td> : null)
                                                    })
                                                }

                                        </tr>
                                    )
                                })
                            }
                        </td>)
                    }
                </table>
            </div>
        )
    }
}