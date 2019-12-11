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
                { title: 'Starting Point', field: 'bus.routes.start' },
                { title: 'Destination', field: 'bus.routes.end' },
                { title: 'Departure', field: 'startTime' },
                { title: 'Arrival', field: 'endTime' },
                { title: 'Duration', field: 'duration' }
            ],
            data: [],
        }
    }

    componentDidMount() {
        if (localStorage.getItem('token') !== null) {
            this.busScheduleRequest().then(result => {
                console.log(result)
                this.setState({
                    data: result.data.data.body
                })
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

    busScheduleRequest() {
        return new Promise((resolve, reject) => {
            axios.get('http://localhost:4000/admin/busSchedule')
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
                    <Grid item xs={7} >
                        <Paper className={classes.paper} >
                            <Grid container justify='space-around' style={{ height: '10%', marginTop: '1%' }}>
                                <Grid style={{ width: '100%' }}>
                                    <Card style={{ maxHeight: '300px' }}>
                                        <CardContent style={{ backgroundColor: '#1976d2' }}>
                                            <p style={{ textAlign: 'justify', color: 'white' }}><b><i className="fas fa-info-circle" style={{ fontSize: '30px', color: 'white' }}></i> &nbsp; &nbsp;Buses Schedule<br ></br></b>
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
                                        // onRowAdd: newData =>
                                        //     new Promise(resolve => {
                                        //         setTimeout(() => {
                                        //             resolve();
                                        //             this.setState(prevState => {
                                        //                 const data = [...prevState.data];
                                        //                 data.push(newData);
                                        //                 return { ...prevState, data };
                                        //             });
                                        //         }, 600);
                                        //     }),
                                        // onRowUpdate: (newData, oldData) =>
                                        //     new Promise(resolve => {
                                        //         setTimeout(() => {
                                        //             resolve();
                                        //             if (oldData) {
                                        //                 this.setState(prevState => {
                                        //                     const data = [...prevState.data];
                                        //                     data[data.indexOf(oldData)] = newData;
                                        //                     return { ...prevState, data };
                                        //                 });
                                        //             }
                                        //         }, 600);
                                        //     }),
                                        // onRowDelete: oldData =>
                                        //     new Promise(resolve => {
                                        //         setTimeout(() => {
                                        //             resolve();
                                        //             this.setState(prevState => {
                                        //                 const data = [...prevState.data];
                                        //                 data.splice(data.indexOf(oldData), 1);
                                        //                 return { ...prevState, data };
                                        //             });
                                        //         }, 600);
                                        //     }),
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



