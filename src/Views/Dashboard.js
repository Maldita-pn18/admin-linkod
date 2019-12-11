import React, { Component } from 'react';
import Header from '../Components/Header';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { Redirect } from "react-router-dom";
import axios from "axios";

export default class DateLocation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      toViewAll: false,
      numberOfTickets: 0,
      numberOfBuses: 0,
      dailyTotal: 0,
      toLogin:false
    }
  }

  componentDidMount() {
    if (localStorage.getItem('token') !== null) {
      this.dashboardRequest().then(result => {
        if (result.data.data.body.ticketCount === undefined) {
          result.data.data.body.ticketCount = 0
        }
        if (result.data.data.body.busCount === undefined) {
          result.data.data.body.busCount = 0
        }
        this.setState({
          numberOfTickets: result.data.data.body.ticketCount,
          numberOfBuses: result.data.data.body.busCount,
          dailyTotal: result.data.data.body.dailyTotal
        })
      })
    }else{
      this.setState({toLogin:true})
    }
  }

  login(){
    if(this.state.toLogin){
      return <Redirect to={{pathname:'/admin/login'}}/>
    }
  }

  dashboardRequest() {
    return new Promise((resolve, reject) => {
      axios.get('http://localhost:4000/admin/dashboard')
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  render() {
    if (this.state.toViewAll) {
      return <Redirect to={{ pathname: "/admin/Viewall" }} />;
    }
    return (
      <div>
        {this.datelocation()}
        {this.login()}
      </div>
    )
  }

  datelocation() {

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
        <Grid container spacing={3} justify="center" style={{ marginTop: '3%', height: '100%', }}>
          <Grid item xs={8} >
            <Paper className={classes.paper} >
              <Grid container justify='space-around' style={{ height: '70%', marginTop: '1%' }}>
                <Grid style={{ width: '98%' }}>
                  <Card className={classes.card} style={{ maxHeight: '300px', marginTop: '1%' }}>
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="h6">
                        <b>SUMMARY</b> <Link
                          component="button"
                          variant="body2"
                          onClick={() => {
                            this.setState({ toViewAll: true })
                          }}
                        >(view all)</Link>
                        <hr ></hr>

                      </Typography>
                      <Grid>
                        <p><b>Number Of Operating Bus/s:</b>&nbsp;&nbsp;{this.state.numberOfBuses}</p>
                        <p><b>Number Of Ticket/s:</b>&nbsp;&nbsp;{this.state.numberOfTickets}</p>
                        <p><b>Daily Total:</b>&nbsp;&nbsp;{this.state.dailyTotal}</p>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
              {/* <br></br>
              <br></br>
              <hr style={{ margin: '2%' }}></hr> */}

            </Paper>
          </Grid>
        </Grid>
      </div >
    )
  }

}



