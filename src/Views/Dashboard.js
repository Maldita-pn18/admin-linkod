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
import { Redirect } from "react-router-dom";



export default class DateLocation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      toViewAll:false,
      toUpdateBooking: false,
    }
  }

  checkCredential = () => {

  }
  render() {
    if(this.state.toViewAll){
      return <Redirect to={{ pathname: "/admin/Viewall" }} />;
    }
    // if (this.state.toUpdateBooking){
    //   return <Redirect to={{ pathname: "/admin/UpdateBooking" }} />;
    // }
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
                        <b>Latest Booking</b> <Link
                          component="button"
                          variant="body2"
                          onClick={() => {
                            this.setState({toViewAll:true})
                          }}
                        >(view all)</Link>
                        <hr ></hr>

                      </Typography>
                      <Grid>
                        <p>
                          22-02-2017 09:16
                        </p>
                        <p style={{ marginTop: '1%' }}><Link
                          component="button"
                          variant="body2"
                          onClick={() => {
                            // this.setState({toUpdateBooking:true})
                          }}
                        >Mary Grace Cordoto</Link></p>
                        <p>66332233</p>
                        <p>Atlanta - Cincinnati, 13:00 - 20:55</p>
                        <p>at 23-02-2017</p>
                        <p>from Atlanta to Charlotte</p>
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



