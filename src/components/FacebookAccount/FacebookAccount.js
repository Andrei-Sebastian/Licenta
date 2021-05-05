import React from 'react';
import FacebookLogin from 'react-facebook-login';
import './facebook-style.scss'
 
  class MyComponent extends React.Component {
    responseFacebook(response) {
      console.log(response);
    }
 
    render() {
      // let style = {
      //   height: '43px',
      //   width: "95px", 
      //   'box-shadow': 'rgb(0 0 0 / 24%) 0px 2px 2px 0px, rgb(0 0 0 / 24%) 0px 0px 1px 0px',
      //   'align-items': 'center',
      //   'text-align': 'center',
      //   padding: '0px',
      //   'border-radius': '2px',
      //   border: '1px solid transparent',
      //   'font-size': '14px',
      //   'font-family': 'Roboto, sans-serif'
      // }
      return (
        <FacebookLogin
          appId="1088597931155576"
          autoLoad={false}
          fields="name,email,picture"
          scope="public_profile,user_friends,user_actions.books"
          callback={this.responseFacebook}
          cssClass="facebook-button"
          size="small"
          textButton="Login"
          icon="fa-facebook"
        />
      )
    }
  }
 
  export default MyComponent;