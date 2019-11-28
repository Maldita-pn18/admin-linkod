import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    }
  }
  checkCredintial = () => {

  }
  render() {
    // if (this.state.toCheckout) {
    //     //go to the Checkout Component
    //     this.setState({ fnameColor: { color: "black" }, lnameColor: { color: "black" }, emailColor: { color: "black" }, phoneColor: { color: "black" }, paymentColor: { color: "black" } })
    //     return <Redirect to={{ pathname: "/Confirm", state: { fname: this.state.firstname, lname: this.state.lastname, gmail: this.state.email, cp: this.state.phone, pay: this.state.payment } }} />
    // }
    return (
      <div>
        {this.loginForm()}
      </div>
    )
  }
  loginForm() {
    const classes = makeStyles(theme => ({
      body: {
        backgroundColor: theme.palette.common.white,
      },
      paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
      },
      root: {
        flexGrow: 1,
    },
    paper: {
        height: 100,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary
    },
    bigAvatar: {
      width: 60,
      height: 60,
    },
    }));

    return (
      <Grid container spacing={3} justify="center" style={{ marginTop: '10%' }}>
        <Grid item xs={5} >
          <Paper className={classes.paper} >
            <Grid container justify='space-around' style={{ height: '50%', marginTop: '8%' }}>
              <Grid style={{ width: '100%' }}>
                <Card style={{ height: '400px' }}>
                  <CardContent >
                    <CssBaseline />
                    <div className={classes.paper}>
                      <center>  <LockOutlinedIcon />
                        <Avatar alt="Remy Sharp" src="https://cdn1.vectorstock.com/i/1000x1000/11/10/admin-icon-male-person-profile-avatar-with-gear-vector-25811110.jpg" className={classes.bigAvatar} />
                      <Typography component="h1" variant="h5">
                        Admin
                      </Typography></center>
                      <Typography backgroundColor="pink" ></Typography>
                      <form className={classes.form} noValidate>
                        <TextField
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          id="username"
                          label="Username"
                          name="username"
                          autoComplete="username"
                          autoFocus
                        />
                        <TextField
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          name="password"
                          label="Password"
                          type="password"
                          id="password"
                          autoComplete="current-password"
                        />

                        <Button
                          type="submit"
                          fullWidth
                          variant="contained"
                          color="primary"
                          className={classes.submit}
                        >
                          Login
                    </Button>
                      </form>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        </Grid>

        );
      }
}