import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import {Redirect} from "react-router-dom";
import axios from 'axios';
import Layout from "./layout";

class Login extends Component{
  state = {
    email: '',
    password: '',
    login: false,
    resgiser: false,
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
    };
    
    axios.post(`http://localhost:8080/forgot/password`,
      params,
      {
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      })
    .then( response => {
      // localStorage.setItem('user-info', response.data.accessToken);
      this.state.login = true;
      this.setState(this.state);
      console.log(response);
      alert("check email")
    })
    .catch (err => {
      // this.state.wrongEmail = true;
      // this.state.wrongPassword = true;
      // this.setState(this.state);
    });
  });

  // componentDidMount() {
  //   if(localStorage.getItem('user-info')) {
  //     this.state.logged = true;
  //     this.setState(this.state);
  //   }
  // };

  render() {
    if (this.state.login) {
      return <Redirect to="/login"/>
    }

  if (this.state.resgiser) {
      return <Redirect to="/register"/>
    }

    return (
      <Layout title="SEND EMAIL">
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
                style={this.state.wrongEmail ? {borderColor: 'red'} : {}}
                onChange={(e) => {
                  this.state.email = e.target.value;
                  this.setState(this.state);
                }}
                placeholder="Email"
              />
            </Form.Group>
            
            <button className="submit-button" disabled={!this.validateForm()} onClick={this.handleSubmit}> 
              SEND EMAIL
            </button>
          </Form>

          <hr/>

          <div className='back-to-login-div' onClick={() => {this.state.login=true; this.setState(this.state);}}>
            <img 
              className='back-to-login-icon' 
              src='https://cdn2.iconfinder.com/data/icons/pittogrammi/142/27-512.png'
              loading="lazy"
            />
          <label className='back-to-login-label'>Back to login</label>
        </div>
      </Layout>
    );
  }
 
}

export default Login;