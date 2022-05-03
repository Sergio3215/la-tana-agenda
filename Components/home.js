import React from 'react';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            arrDay: [],
            arrHour: [],
            onlyHour: [],
            arrUser: []
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
        // console.log(result.doc)
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
            arrHour = result.doc;
        }


        let onlyHour = [];
        intervals.map(h => {
            onlyHour.push(h + ":00")
            onlyHour.push(h + ":30")
        });

        console.log(arrHour);

        let count = 0;
        let alluser = [];
        let arrUser = [];
        arrHour.map(h => {
            alluser.push({ id: h._id, user: h.user, allow: h.allow, hour: h.hour });
            count++;
            if (count == 7) {
                count = 0;
                arrUser.push(alluser);
                alluser = [];
            }
        })
        // console.log(arrUser)
        this.setState({
            arrDay: arrDays,
            arrHour: arrHour,
            onlyHour: onlyHour,
            arrUser: arrUser
        }, () => this.forceUpdate())
    }

    render() {
        let count = 0;
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
                    {/*
                    <tr>
                    <td>
                        {
                            this.state.arrDay.map((d, index) => <td>
                                <td>{d}</td>
                                {
                                    this.state.onlyHour.map((h,indexHour) => {
                                        return (
                                            <tr>
                                                {
                                                    (index == 0) ?
                                                        <td>{h}</td> : null
                                                }
                                                {
                                                    this.state.arrUser[indexHour].map((u,indexUser) =>{
                                                        // console.log(indexUser)
                                                       return ( 
                                                        (index != 0 && indexUser==0) ?
                                                        (u.allow)?
                                                        (u.user != "")?
                                                        <td>{u.user}</td> : <td><button>Asignar Personal</button></td>
                                                            :<td>X</td> 
                                                        : null
                                                       )
                                                    })
                                                }

                                            </tr>
                                        )
                                    })
                                }
                            </td>)
                        }
                    </td>
                    </tr>*/
                    }
                    <thead>
                        <tr>
                            {
                                this.state.arrDay.map(d => <td>{d}</td>)
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.onlyHour.map((h,indexHour) => {
                                return(
                                    <tr>
                                        <td>{h}</td>
                                        {
                                            
                                        }
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}