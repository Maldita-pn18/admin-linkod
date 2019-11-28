import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

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
    const classes = useStyles();
    const useStyles = makeStyles(theme => ({
      '@global': {
        body: {
          backgroundColor: theme.palette.common.white,
        },
      },
      paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
      },
      form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
      },
    }));

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Admin
        </Typography>
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
      </Container>

    );
  }
}