import React, { Component } from "react";
import {Redirect} from "react-router-dom";
import Layout from "./layout";

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
      <Layout title="Expired link">
          <p className="message-expired-token">Please resend an email to reset your password. The link expires after 10 minutes.</p>
          <p className="login-forgot-password" onClick={() => {this.state.forgot = true; this.setState(this.state); }}>Resend now</p>
          
          <hr />

          <div className='back-to-login-div' onClick={() => {this.state.login=true; this.setState(this.state);}}>
            <img className='back-to-login-icon' src='https://cdn2.iconfinder.com/data/icons/pittogrammi/142/27-512.png' loading="lazy"/>
            <label className='back-to-login-label'>Back to login</label>
        </div>
      </Layout>
    );
  }
 
}

export default Login;