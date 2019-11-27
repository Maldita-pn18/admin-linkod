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
                {this.view()}
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
                    <Grid item xs={10} >
                        <Paper className={classes.paper} >
                            <Grid container justify='space-around' style={{ height: '10%', marginTop: '1%' }}>
                                <Grid style={{ width: '100%' }}>
                                    <Card style={{ maxHeight: '300px'}}>
                                        <CardContent style={{ backgroundColor: '#1976d2' }}>
                                            <p style={{ textAlign: 'justify' }}><InfoIcon /><b>Manage Bookings <br ></br></b>
                                            </p>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                            <Grid>
                             
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </div >
        )
    }

}



