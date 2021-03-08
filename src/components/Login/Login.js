import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import {Redirect} from "react-router-dom";
import axios from 'axios';
import "./Login.css";
import GoogleAccount from '../GoogleAccount/GoogleAccount';
import FacebookAccount from '../FacebookAccount/FacebookAccount';

class Login extends Component{
  state = {
    email: '',
    password: '',
    logged: false,
    resgiser: false,
    forgot: false,
    wrongEmail: false,
    wrongPassword: false,
  }

  validateForm =  (() => {
    return true;
  });

  handleSubmit = ((event) => {
    event.preventDefault();
    let params = {
      email: this.state.email,
      password: this.state.password,
    };
    
    axios.post(`http://localhost:8080/login`,
      params,
      {
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      })
    .then( response => {
      localStorage.setItem('user-info', response.data.accessToken);
      this.state.logged = true;
      this.setState(this.state);
    })
    .catch (err => {
      this.state.wrongEmail = true;
      this.state.wrongPassword = true;
      this.setState(this.state);
    });
  });

  componentDidMount() {
    if(localStorage.getItem('user-info')) {
      this.state.logged = true;
      this.setState(this.state);
    }
  };

  render() {
    if (this.state.logged) {
      return <Redirect to="/welcome"/>
    }

    if (this.state.resgiser) {
      return <Redirect to="/register"/>
    }

    if (this.state.forgot) {
      return <Redirect to="/forgotpassword"/>
    }

    return (
      <div className="login-page-div">
        <div className="login-form">
          <p className="login-title">Login</p>
          <Form >
            <Form.Group size="lg" controlId="email">
              <Form.Label 
                className="email-label"
                style={this.state.email.length > 0 ? {display: 'block'} :  {display: 'none'}}
              >Email</Form.Label>
              <Form.Control
                className="input-form input-email"
                autoFocus
                type="email"
                value={this.state.email}
                style={this.state.wrongEmail ? {'border-color': 'red'} : {}}
                onChange={(e) => {
                  this.state.email = e.target.value;
                  this.setState(this.state);
                }}
                placeholder="Email"
              />
            </Form.Group>
            <Form.Group size="lg" controlId="password">
              <Form.Label 
                className="password-label"
                style={this.state.password.length > 0 ? {display: 'block'} :  {display: 'none'}}
              >Password</Form.Label>
              <Form.Control
                className="input-form input-password"
                type="password"
                value={this.state.password}
                style={this.state.wrongPassword ? {'border-color': 'red'} : {}}
                onChange={(e) => {
                  this.state.password = e.target.value;
                  this.setState(this.state);
                }}
                placeholder="Password"
              />
            </Form.Group>
            <button className="login-button" disabled={!this.validateForm()} onClick={this.handleSubmit}> 
              SIGN IN
            </button>
            <p className="login-forgot-password" onClick={() => {this.state.forgot = true; this.setState(this.state); }}>Forgot password?</p>
            <hr className= "login-hr"></hr>
            <p className="login-or-text">or</p>
            <div className="login-google-button">
              <GoogleAccount/>
              <FacebookAccount/>
            </div>
            <div className="sing-up-div">
              <label>Don’t have an account?</label> 
              <label className="sing-up-label" onClick={() => {
                this.state.resgiser = true;
                this.setState(this.state);
              }}>Sign up</label> 
            </div>
          </Form>
           
        </div>
      </div>
    );
  }
 
}

export default Login;