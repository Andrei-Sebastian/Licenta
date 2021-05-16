import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import {Redirect} from "react-router-dom";
import ExpiredToken from './expired-token'; 
import axios from 'axios';

class NewPassword extends Component{
  state = {
    newPassword: '',
    confirmPassword: '',
    resetLink: this.props.match.params.id,
    login: false,
    resgiser: false,
    wrongNewPassword: false,
    wrongConfirmPassword: false,
    expiredToken: false
  }

  constructor(props) {
    super(props);
    let params = {
      resetToken: this.props.match.params.id
    }
    axios.get(`http://localhost:8080/verify/token`,{params})
    .catch (err => {
      this.state.expiredToken = true;
      this.setState(this.state);
    });
  }

  validateForm =  (() => {
    return true;
  });

  handleSubmit = ((event) => {
    event.preventDefault();
     if (this.state.newPassword.length === 0) {
      this.state.wrongNewPassword = true;
      this.setState(this.state);
      alert("New password input cannot be empty");
    } else if (this.state.wrongConfirmPassword.length === 0) {
      this.state.wrongConfirmPassword = true;
      this.setState(this.state);
      alert("Confirm password input cannot be empty");
    } else if (this.state.newPassword !== this.state.confirmPassword) {
      this.state.wrongConfirmPassword = true;
      this.state.wrongNewPassword = true;
      this.setState(this.state);
      alert("New password and Confirm password input cannot be different");
    } else {
      let params = {
        resetLink: this.props.match.params.id,
        newPassword: this.state.newPassword,
        confirmPassword: this.state.confirmPassword
      };
      
      axios.post(`http://localhost:8080/reset/password`,
        params,
        {
          headers: { 
            "Content-Type": "application/json",
            "Accept": "application/json"
          }
        })
      .then( response => {
        alert("Password has been changed")
        this.state.login = true;
        this.setState(this.state);
      })
      .catch (err => {
        this.state.wrongConfirmPassword = true;
        this.state.wrongNewPassword = true;
        this.setState(this.state);
      });
    }
    
  });

  componentDidMount() {
    if (localStorage.getItem('user-info')) {
      this.state.logged = true;
      this.setState(this.state);
    }
  };

  render() {
    if (this.state.logged) {
      return <Redirect to="/welcome"/>;
    }

    if (this.state.login) {
      return <Redirect to="/login"/>;
    }

    if (this.state.resgiser) {
        return <Redirect to="/register"/>;
    }

    if (this.state.expiredToken) {
      return <ExpiredToken/>;
    }

    return (
      <div className="login-page-div">
        <div className="login-form">
          <p className="login-title">Change password</p>
          <Form >
            <Form.Group size="lg" controlId="password">
              <Form.Label 
                className="email-label"
                style={this.state.newPassword.length > 0 ? {display: 'block'} :  {display: 'none'}}
              >New password</Form.Label>
              <Form.Control
                className="input-form input-password"
                autoFocus
                type="password"
                // value={this.state.email}
                style={this.state.wrongNewPassword ? {borderColor: 'red'} : {}}
                onChange={(e) => {
                  this.state.newPassword = e.target.value;
                  this.setState(this.state);
                }}
                placeholder="New password"
              />
            </Form.Group>
            <Form.Group size="lg" controlId="password">
              <Form.Label 
                className="password-label"
                style={this.state.confirmPassword.length > 0 ? {display: 'block'} :  {display: 'none'}}
              >Confirm password</Form.Label>
              <Form.Control
                className="input-form input-password"
                type="password"
                // value={this.state.password}
                style={this.state.wrongConfirmPassword ? {borderColor: 'red'} : {}}
                onChange={(e) => {
                  this.state.confirmPassword = e.target.value;
                  this.setState(this.state);
                }}
                placeholder="Confirm password"
              />
            </Form.Group>
            <button className="login-button" disabled={!this.validateForm()} onClick={this.handleSubmit}> 
              CHANGE
            </button>
          </Form>
          <hr style={{width: '100%', margin:'20px 0 20px 0'}}></hr>
          <div className='back-to-login-div' onClick={() => {this.state.login=true; this.setState(this.state);}}>
            <img 
              className='back-to-login-icon' 
              alt="Back to login"
              loading="lazy"
              src='https://cdn2.iconfinder.com/data/icons/pittogrammi/142/27-512.png'
            />
          <label className='back-to-login-label'>Back to login</label>
        </div>
        </div>
      </div>
    );
  }
 
}

export default NewPassword;