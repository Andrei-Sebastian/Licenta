import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
export class GoogleAccount extends Component {

  responseFailureGoogle=(response)=>{
    console.log(response);
    console.log(response.profileObj); 
  }

  responseSuccessGoogle=(response)=>{
    console.log(response);
    console.log(response.profileObj); 
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