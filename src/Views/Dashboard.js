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


export default class DateLocation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dashboard_disabled:'',
      toViewAll:false,
      numberOfTickets:'',
      numberOfBuses:'',
      dailyTotal:'',
    }
  }

  componentDidMount(){
    this.setState({dashboard_disabled:this.props.location.state.dashboard_disabled})
  }

  dashboardRequest() {
    return new Promise((resolve, reject) => {
      // axios.get('http://localhost:4000/login/admin/' + this.state.username + '/' + this.state.password)
      //   .then(res => {
      //     console.log(res)
      //       resolve(res)
      //   })
      //   .catch(err =>{
      //     reject(err)
      //   })
    })
  }
  componentDidMount(){
    this.dashboardRequest().then()
  }
  render() {
    if(this.state.toViewAll){
      return <Redirect to={{ pathname: "/admin/Viewall" }} />;
    }
    return (
      <div>
        {this.datelocation()}
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
                            this.setState({toViewAll:true})
                          }}
                        >(view all)</Link>
                        <hr ></hr>

                      </Typography>
                      <Grid>
                        <h3>Number Of Operating Bus/s:</h3><span>{this.state.numberOfBuses}</span>
                        <h3>Number Of Ticket/s:</h3><span>{this.state.numberOfTickets}</span>
                        <h3>Daily Total:</h3><span>{this.state.dailyTotal}</span>
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



