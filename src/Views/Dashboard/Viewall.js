import React, { Component } from 'react';
import Header from '../../Components/Header';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import InfoIcon from '@material-ui/icons/Info';
import MaterialTable from 'material-table';



export default class DateLocation extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    checkCredential = () => {

    }
    render() {


        return (
            <div>
                {this.datelocation()}
            </div>
        )
    }

    datelocation() {
        const [state, setState] = React.useState({
            columns: [
              { title: 'Name', field: 'name' },
              { title: 'Surname', field: 'surname' },
              { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
              {
                title: 'Birth Place',
                field: 'birthCity',
                lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
              },
            ],
            data: [
              { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
              {
                name: 'Zerya Betül',
                surname: 'Baran',
                birthYear: 2017,
                birthCity: 34,
              },
            ],
          });
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
            formControl: {
                margin: theme.spacing(1),
                minWidth: 120,
            },
            selectEmpty: {
                marginTop: theme.spacing(2),
            },
        }));

        return (
            <div className={classes.root}>
                <Header />
                <Grid container spacing={3} justify="center" style={{ marginTop: '3%' }}>
                    <Grid item xs={8} >
                        <Paper className={classes.paper} >
                            <Grid container justify='space-around' style={{ height: '10%', marginTop: '1%' }}>
                                <Grid style={{ width: '98%' }}>
                                    <Card className={classes.card} style={{ maxHeight: '300px', marginTop: '1%' }}>
                                        <CardContent style={{ backgroundColor: '#1976d2' }}>
                                            <p container justify='space-around' style={{ textAlign: 'justify' }}> <InfoIcon />  <b>Manage Bookings <br ></br></b>
                                                Below is a list of all ticket bookings made. By default the new bookings stay on top. You will find some brief data about each booking and you can view details and/or edit booking by clicking on the Edit button at the end of each booking row. You can filter booking by their status. You can also search bookings using the search bar or the advanced search (click on the arrow button next to search bar.</p>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                            <Grid>
                                <MaterialTable
                                    title="Editable Example"
                                    columns={state.columns}
                                    data={state.data}
                                    editable={{
                                        onRowAdd: newData =>
                                            new Promise(resolve => {
                                                setTimeout(() => {
                                                    resolve();
                                                    setState(prevState => {
                                                        const data = [...prevState.data];
                                                        data.push(newData);
                                                        return { ...prevState, data };
                                                    });
                                                }, 600);
                                            }),
                                        onRowUpdate: (newData, oldData) =>
                                            new Promise(resolve => {
                                                setTimeout(() => {
                                                    resolve();
                                                    if (oldData) {
                                                        setState(prevState => {
                                                            const data = [...prevState.data];
                                                            data[data.indexOf(oldData)] = newData;
                                                            return { ...prevState, data };
                                                        });
                                                    }
                                                }, 600);
                                            }),
                                        onRowDelete: oldData =>
                                            new Promise(resolve => {
                                                setTimeout(() => {
                                                    resolve();
                                                    setState(prevState => {
                                                        const data = [...prevState.data];
                                                        data.splice(data.indexOf(oldData), 1);
                                                        return { ...prevState, data };
                                                    });
                                                }, 600);
                                            }),
                                    }}
                                />
                            </Grid>
                            <br></br>
                            <br></br>
                            <hr style={{ margin: '2%' }}></hr>
                            <Card>
                                <CardActions>
                                    <Grid container justify='flex-end'>
                                        <Button variant="outlined" color="primary">
                                            + Add booking
                                             </Button>
                                    </Grid>
                                </CardActions>
                            </Card>
                        </Paper>
                    </Grid>
                </Grid>
            </div >
        )
    }

}



