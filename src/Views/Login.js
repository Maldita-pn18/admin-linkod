import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { Redirect } from "react-router-dom";
import axios from "axios";
// import { ToggleRadioButtonChecked } from 'material-ui/svg-icons';
// import "../Views/App.css";


const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}

const countErrors = (errors) => {
  let count = 0;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (count = count + 1)
  );
  return count;
}
export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      formValid: false,
      errorCount: null,
      errors: {
        username: '',
        password: '',
      },
      username: "",
      password: "",
      todashboard: false,
    };
  }

  loginAuth() {
    return new Promise((resolve, reject) => {
      axios.get('http://localhost:4000/login/admin/' + this.state.username + '/' + this.state.password)
        .then(res => {
          console.log(res)
            resolve(res)
        })
        .catch(err =>{
          reject(err)
        })
    })
  }

  login = () => {
    // localStorage.setItem("username",this.state.username)
    // localStorage.setItem("password",this.state.password)
    //after login 
    //check username and password in the database
    //if successfull response token then store to localstorage
    //then go to dashboard
    //if unsuccessfull set errors.username and password to Invalid username and invalid password

    if (this.state.username !== "" && this.state.password !== "") { 
      let errors = this.state.errors;
      this.loginAuth().then(res => {
        if(res.data.data.body.auth){
          this.setState({ todashboard: true });
          localStorage.setItem("token",res.data.data.body.accessToken)
        }else{
          errors.username = 'Invalid Username!'
          errors.password = 'Invalid Password!'
        }
      })
    }
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;
    switch (name) {
      case 'username':
        if (value.length < 5) {
          errors.username = 'Username must be 5 characters long!'
        } else {
          errors.username = "";
          this.setState({ username: value });
        }
        break;
      case 'password':
        if (value.length === "") {
          errors.password = 'You are Accessing Admin!'
        } else {
          errors.password = "";
          this.setState({ password: value });
        }
        break;
    }
    this.setState({ errors, [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ formValid: validateForm(this.state.errors) });
    this.setState({ errorCount: countErrors(this.state.errors) });
  }

  render() {
    if (this.state.todashboard) {
      return <Redirect to={{ pathname: "/admin/" }} />;
    }
    const { errors, formValid } = this.state;
    const classes = makeStyles(theme => ({
      root: {
        display: 'flex',
        '& > *': {
          margin: theme.spacing(1),
        },
      },
      bigAvatar: {
        width: 80,
        height: 80,
      },
    }));
    return (
      <div className='wrapper'>
        <div className='form-wrapper'>
          <center><Avatar alt="Remy Sharp" src="https://cdn1.vectorstock.com/i/1000x1000/11/10/admin-icon-male-person-profile-avatar-with-gear-vector-25811110.jpg" style={{ height: '130px', width: '140px', }} className={classes.bigAvatar} />
            <h2>Admin</h2></center>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className='username'>
              <label htmlFor="username">Username</label>
              <input type='username' className="credentials" name='username' onChange={this.handleChange} noValidate />
              {errors.username.length > 0 &&
                <span className='error'>{errors.username}</span>}
            </div>
            <div className='password'>
              <label htmlFor="password">Password</label>
              <input type='password' className="credentials" name='password' onChange={this.handleChange} noValidate />
              {errors.password.length > 0 &&
                <span className='error'>{errors.password}</span>}
            </div>
            <div className='submit'>
              <button id="login" onClick={this.login}>submit</button>
            </div>
            {/* <div className="info">{this.state.errorCount !== null ? <p className="form-status">Form is {formValid ? 'valid ✅' : 'invalid ❌'}</p> : ''}</div> */}
          </form>
        </div>
      </div>
    );
  }
}