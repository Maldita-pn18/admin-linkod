import React, { Component } from 'react';
import Header from '../Components/Header';
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
import TextField from '@material-ui/core/TextField';



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
                                            <p container justify='space-around' style={{ textAlign: 'justify' }}> <InfoIcon />  <b> Update booking <br ></br></b>
                                                Use the from below to update the selected booking. Note that booking details and client details are separated into two tabs. Using the links in the right column of Booking details tab you can send new booking confirmation email to your clients or print booking tickets. You can use the "Resend confirmation" option if you have manually added the booking or have updated it and you wish to notify the customer about this.</p>

                                            <Grid container style={{ width: '98%', marginTop: '50px' }} justify="space-around">
                                                <Grid style={{ width: '98%' }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        value={this.state.firstname}
                                                        className={classes.textField}
                                                        label="First Name"
                                                        margin="normal"
                                                        variant="outlined"
                                                        style={{
                                                            width: '100%'
                                                        }}
                                                    />
                                                </Grid>

                                                <p style={this.state.fnameColor}>{this.state.requiredfname}</p>
                                                <Grid style={{ width: '98%' }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        value={this.state.lastname}
                                                        className={classes.textField}
                                                        label="Last Name"
                                                        margin="normal"
                                                        variant="outlined"
                                                        style={{
                                                            width: '100%'
                                                        }}
                                                    />

                                                </Grid>
                                                <p style={this.state.lnamecolor}>{this.state.requiredlname}</p>
                                                <Grid style={{ width: '98%' }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        value={this.state.phone}
                                                        className={classes.textField}
                                                        label="Phone Number"
                                                        margin="normal"
                                                        variant="outlined"
                                                        style={{
                                                            width: '100%'
                                                        }}
                                                    />
                                                </Grid>
                                                <p style={this.state.cpColor}>{this.state.requiredcp}</p>
                                                <Grid style={{ width: '98%' }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        value={this.state.email}
                                                        className={classes.textField}
                                                        label="Email"
                                                        margin="normal"
                                                        variant="outlined"
                                                        style={{
                                                            width: '100%'
                                                        }}
                                                    />
                                                </Grid>
                                                <p style={this.state.emailColor}>{this.state.requiredgmail}</p>
                                                <Grid style={{ width: '98%' }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        value={this.state.payment}
                                                        className={classes.textField}
                                                        label="Payment Method"
                                                        margin="normal"
                                                        variant="outlined"
                                                        style={{
                                                            width: '100%'
                                                        }}
                                                    />
                                                </Grid>
                                                <p style={this.state.paymentColor}>{this.state.requiredlname}</p>
                                            </Grid>
                                            <br></br>
                                            <br></br>
                                            <hr style={{ width: '96%' }}></hr>
                                            <Card>
                                                <CardActions>
                                                    <Typography gutterBottom variant="h6" component="h6">
                                                        &nbsp;&nbsp;Price:
                                                </Typography>
                                                    <Grid container justify='flex-end'>
                                                        <Button size="small" color="primary" type="submit" onClick={this.checkInformation} >Preview & Confirm</Button>
                                                        <Grid  justify='flex-end'>
                                                            <Button size="small" color="primary">
                                                                Back
                                                        </Button>
                                                        </Grid>
                                                    </Grid>
                                                </CardActions>
                                            </Card>
                                        </CardContent>
                                    </Card>
                                </Grid>

                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </div >
        )
    }

}



