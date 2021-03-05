import React, { Component } from 'react'
import GoogleLogin from 'react-google-login'
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
    return (
      <div>
        <GoogleLogin
        clientId="681534827758-lducdnsdmg603r21lq7fellpitc8gehk.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={this.responseSuccessGoogle}
        onFailure={this.responseFailureGoogle}
        cookiePolicy={'single_host_origin'}
        
        />
      </div>
    )
  }
}

export default GoogleAccount;