import React, { Component } from 'react';
import Header from '../Components/Header';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MaterialTable from 'material-table';
import { Redirect } from "react-router-dom";
import axios from "axios";



export default class DateLocation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            toLogin: false,
            columns: [
                { title: 'Client', field: 'client' },
                { title: 'Date', field: 'date' },
                { title: 'Departure Time', field: 'departureTime' },
                { title: 'Arrival Time', field: 'arrivalTime' },
                { title: 'From', field: 'from' },
                { title: 'To', field: 'to' },
                { title: 'Bus', field: 'bus' },
                { title: 'Bus Number', field: 'busNumber' },
                { title: 'Seat/s', field: 'seats' },
                { title: 'Bill', field: 'bill' },
                { title: 'Ticket', field: 'ticketNumber' }
            ],
            data: [],
        }
    }

    componentDidMount() {
        if (localStorage.getItem('token') !== null) {
            this.retrieveBookings().then(result => {
                let Tickets = []
                for (var i = 0; i < result.data.data.body.length; ++i) {
                    result.data.data.body[i]["client"] = result.data.data.body[i].lastname + ", " + result.data.data.body[i].firstname
                    result.data.data.body[i]["seats"] = JSON.stringify(result.data.data.body[i].seats);
                    Tickets.push(result.data.data.body[i])
                }
                this.setState({ data: Tickets })
            })
        } else {
            this.setState({ toLogin: true })
        }
    }

    login() {
        if (this.state.toLogin) {
            return <Redirect to={{ pathname: '/admin/login' }} />
        }
    }


    retrieveBookings = () => {
        return new Promise((resolve, reject) => {
            axios.get('http://localhost:4000/admin/bookings')
                .then(res => {
                    resolve(res)
                })
                .catch(err => {
                    reject(err)
                })
        })
    }

    deleteBookings = (id) => {
        return new Promise((resolve, reject) => {
            axios.delete('http://localhost:4000/admin/bookingDelete/' + id)
                .then(res => {
                    resolve(res)
                })
                .catch(err => {
                    reject(err)
                })
        })
    }
    render() {
        return (
            <div>
                {this.view()}
                {this.login()}
            </div>
        )
    }

    view() {
        const classes = makeStyles(theme => ({
            root: {
                flexGrow: 1,
            },
            paper: {
                height: 100,
                padding: theme.spacing(2),
                textAlign: 'center',
                color: theme.palette.text.secondary
            },
            selectEmpty: {
                marginTop: theme.spacing(2),
            },
        }));

        return (
            <div className={classes.root}>
                <Header />
                <Grid container spacing={3} justify="center" style={{ marginTop: '3%' }}>
                    <Grid item xs={11} >
                        <Paper className={classes.paper} >
                            <Grid container justify='space-around' style={{ height: '10%', marginTop: '1%' }}>
                                <Grid style={{ width: '100%' }}>
                                    <Card style={{ maxHeight: '300px' }}>
                                        <CardContent style={{ backgroundColor: '#1976d2' }}>
                                            <p style={{ textAlign: 'justify', color: 'white' }}>
                                                <b>
                                                    <i className="fas fa-info-circle" style={{ fontSize: '30px', color: 'white' }}>
                                                    </i> &nbsp; &nbsp;Manage Bookings<br ></br>
                                                </b>
                                            </p>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                            <Grid>
                                <MaterialTable
                                    title=''
                                    // style={{backgroundColor:'lightBlue'}}
                                    columns={this.state.columns}
                                    data={this.state.data}
                                    editable={{
                                        onRowDelete: oldData =>
                                            new Promise(resolve => {
                                                setTimeout(() => {
                                                    resolve();
                                                    this.setState(prevState => {
                                                        const data = [...prevState.data];
                                                        data.splice(data.indexOf(oldData), 1);
                                                        return { ...prevState, data };
                                                    });
                                                }, 600);
                                                this.deleteBookings(oldData._id).then(result => {
                                                    console.log(result)
                                                })
                                            }),
                                    }}
                                />
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </div >
        )
    }

}



