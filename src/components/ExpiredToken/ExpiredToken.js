import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {Redirect} from "react-router-dom";
import "./ExpiredToken.css";

class Login extends Component{
  state = {
    login: false,
    forgot: false
  }



  render() {
    if (this.state.login) {
      return <Redirect to="/login"/>
    }
    if (this.state.forgot) {
      return <Redirect to="/forgotpassword"/>
    }

    return (
      <div className="expired-token-page-div">
        <div className="expired-token-form">
          <p className="expired-token-title">Expired link</p>
          <p className="message-expired-token">Please resend an email to reset your password. The link expires after 10 minutes.</p>
          <p className="login-forgot-password" onClick={() => {this.state.forgot = true; this.setState(this.state); }}>Resend now</p>
          <hr style={{width: '100%', margin:'20px 0 20px 0'}}></hr>
          <div className='back-to-login-div' onClick={() => {this.state.login=true; this.setState(this.state);}}>
            <img className='back-to-login-icon' src='https://cdn2.iconfinder.com/data/icons/pittogrammi/142/27-512.png'></img>
          <label className='back-to-login-label'>Back to login</label>
        </div>
        </div>
      </div>
    );
  }
 
}

export default Login;