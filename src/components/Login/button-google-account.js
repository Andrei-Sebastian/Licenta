import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import axios from "axios";
export class GoogleAccount extends Component {

  responseFailureGoogle=(response)=>{
    console.log(response);
    console.log(response.profileObj); 
    alert("Something wrong")
  }

  responseSuccessGoogle=(response)=>{
    console.log(response);
    console.log(response.profileObj); 
    let params = {
      email: response.profileObj.email,
      gmail: true,
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
    // localStorage.setItem('user-info', response.data.accessToken);
    console.log(response.data)
    if (response.data.isNewAccount === true) {
      localStorage.setItem('new-info', response.data.accessToken);
      window.location.href='/register';
    } else {
      localStorage.setItem('user-info', response.data.accessToken);
      localStorage.setItem('role', response.data.role);
      console.log(response.data.role);
      if (response.data.role === "stylist") {
        window.location.href = "/welcome";
      } else {
        window.location.href = "/welcome";
      }
    } 
  })
  .catch (err => {
    alert("Something wrong")
  });
  }
  
  render() {
    let style = {
      width: '100px !important',
      'margin-left': '20px'
    }
    return (
      <div>
        <GoogleLogin
        clientId="681534827758-lducdnsdmg603r21lq7fellpitc8gehk.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={this.responseSuccessGoogle}
        onFailure={this.responseFailureGoogle}
        cookiePolicy={'single_host_origin'}
        style={style}

        />
      </div>
    )
  }
}

export default GoogleAccount;