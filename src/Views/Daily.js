import React, { Component } from 'react';
import Header from '../Components/Header';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MaterialTable from 'material-table';
import axios from "axios";

export default class DateLocation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            columns: [
                { title: 'Bus Name', field: 'busName' },
                { title: 'Seats Count', field: 'bus.seats' },
                { title: 'Bus Number', field: 'bus.busNumber' },
                { title: 'Starting Point', field: 'bus.routes.start' },
                { title: 'Destination', field: 'bus.routes.end' },
                { title: 'Start Time', field: 'startTime' },
                { title: 'End Time', field: 'endTime' },
                { title: 'Duration', field: 'duration' },
                { title: 'Child', field: 'fare.child' },
                { title: 'Adult', field: 'fare.adult' },
            ],
            data: [
                
            ],
        }
    }


    render() {
        return (
            <div>
                {this.view()}
            </div>
        )
    }

    addBus = (data) => {
        return new Promise((resolve, reject) => {
            axios.post('http://localhost:4000/admin/busAdd', data)
                .then(res => {
                    resolve(res)
                })
                .catch(err => {
                    reject(err)
                })
        })
    }

    updateBus = (id,data) => {
        return new Promise((resolve, reject) => {
            axios.put('http://localhost:4000/admin/busUpdate/'+id, data)
                .then(res => {
                    resolve(res)
                })
                .catch(err => {
                    reject(err)
                })
        })
    }

    deleteBus = (id) => {
        return new Promise((resolve, reject) => {
            axios.delete('http://localhost:4000/admin/busDelete/'+id)
                .then(res => {
                    resolve(res)
                })
                .catch(err => {
                    reject(err)
                })
        })
    }

    retrieveDailyBuses = () => {
        return new Promise((resolve, reject) => {
            axios.get('http://localhost:4000/admin/bus')
                .then(res => {
                    resolve(res)
                })
                .catch(err => {
                    reject(err)
                })
        })
    }

    componentDidMount() {
        this.retrieveDailyBuses().then(result => {
            let buses = []
            for(var i = 0; i < result.data.data.body.length; ++i){
                let bus = result.data.data.body[i]
                let seat = result.data.data.body[i].bus.seats
                bus.bus["seats"] = Object.keys(seat).length
                buses.push(bus)
            }
            this.setState({data:buses})
        })
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
            }
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
                                            <p style={{ textAlign: 'justify', color: 'white' }}><b><i className="fas fa-info-circle" style={{ fontSize: '30px', color: 'white' }}></i> &nbsp; &nbsp;Buses List<br ></br></b>
                                            </p>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                            <Grid>
                                <MaterialTable
                                    title=''
                                    columns={this.state.columns}
                                    data={this.state.data}
                                    editable={{
                                        onRowAdd: newData =>
                                            new Promise(resolve => {
                                                setTimeout(() => {
                                                    resolve();
                                                    this.setState(prevState => {
                                                        const data = [...prevState.data];
                                                        data.push(newData);
                                                        return { ...prevState, data };
                                                    });
                                                }, 600);
                                                this.addBus(newData).then(res => {
                                                    console.log(res)
                                                })
                                            }),
                                        onRowUpdate: (newData, oldData) =>
                                            new Promise(resolve => {
                                                setTimeout(() => {
                                                    resolve();
                                                    if (oldData) {
                                                        this.setState(prevState => {
                                                            const data = [...prevState.data];
                                                            data[data.indexOf(oldData)] = newData;
                                                            return { ...prevState, data };
                                                        });
                                                    }
                                                }, 600);
                                                this.updateBus(oldData._id,newData).then(result =>{
                                                    console.log(result)
                                                })
                                            }),
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
                                                this.deleteBus(oldData._id).then(result => {
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



