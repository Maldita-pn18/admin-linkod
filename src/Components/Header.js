import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Redirect } from "react-router-dom";
export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDashboard: false,
      toSchedule: false,
      toBuses: false,
      toBookings: false,
    }
  }

  render() {
    if (this.state.toDashboard) {
      return <Redirect to={{ pathname: "/admin/"}} />
    }
    if(this.state.toBookings){
      return <Redirect to={{ pathname: "/admin/ViewAll" }} />
    }
    if(this.state.toBuses){
      return <Redirect to={{ pathname: "/admin/Daily" }} />
    }
    if(this.state.toSchedule){
      return <Redirect to={{ pathname: "/admin/Schedule" }} />
    }
    return (
      <div>
        {this.ButtonAppBar()}
        {/* {this.dashboard()} */}
      </div>
    )
  }
  dashboard = () => {
    this.setState({toDashboard:true})
    // if (this.state.toDashboard) {
    //   return <Redirect to={{ pathname: "/admin/" }} />
    // }
  }

  schedule = () => {
    this.setState({toSchedule:true})
  }

  buses = () => {
    this.setState({toBuses:true})
  }

  bookings = () => {
    this.setState({toBookings:true})
  }


  ButtonAppBar() {
    let states = this.state
    const classes = makeStyles(theme => ({
      root: {
        flexGrow: 1,
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        flexGrow: 1,
      },
    }));

    return (
      <div className={classes.root}>
        <AppBar position="static" style={{ backgroundColor: '#0269e8' }}>
          <Toolbar>
            <ButtonGroup style={{ height: '30px' }} variant="text" aria-label="outlined contained primary button group">
              <Button onClick={this.dashboard} style={{ color: "white" }}><i className="fas fa-tachometer-alt" style={{ fontSize: '30px' }}></i>&nbsp;&nbsp;Dashboard</Button>
              <Button onClick={this.schedule} style={{ color: "white" }}><i className="far fa-calendar-alt" style={{ fontSize: '30px' }} ></i>&nbsp;&nbsp;Schedule</Button>
              <Button onClick={this.buses} style={{ color: "white" }} ><i className="fas fa-bus-alt" style={{ fontSize: '30px' }}></i>&nbsp;&nbsp;Buses</Button>
              <Button onClick={this.bookings} style={{ color: "white" }}><i className="fas fa-clipboard-list" style={{ fontSize: '30px' }}></i>&nbsp;&nbsp;Bookings</Button>
            </ButtonGroup>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}