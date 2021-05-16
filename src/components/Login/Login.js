import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import axios from 'axios';
import GoogleAccount from './button-google-account';
import FacebookAccount from './button-facebook-account';
import Layout from "./layout";
import {
  Navbar, 
  Button, 
  // FormControl, 
  // Form, 
  Nav, 
  // Link, 
  // NavDropdown
} from 'react-bootstrap';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [wrongEmail, setWrongEmail] = useState(false);
  const [wrongPassword, setWrongPassword] = useState(false);

 const validateForm =  () => {
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    let params = {
      email: email,
      password: password,
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
      window.location.href='/welcome';
    })
    .catch (err => {
      setWrongEmail(true);
      setWrongPassword(true);
    });
  }; 

  return (
    <Layout title="Login">
        <Form >
          <Form.Group size="lg" controlId="email" >
            <Form.Label 
              className="email-label"
              style={email.length > 0 ? {display: 'block'} :  {display: 'none'}}
            >Email</Form.Label>
            <Form.Control
              className="input-form input-email"
              autoFocus
              type="email"
              value={email}
              style={wrongEmail ? {borderColor: 'red'} : {}}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </Form.Group>
          <Form.Group size="lg" controlId="password">
            <Form.Label 
              className="password-label"
              style={password.length > 0 ? {display: 'block'} :  {display: 'none'}}
            >Password</Form.Label>
            <Form.Control
              className="input-form input-password"
              type="password"
              value={password}
              style={wrongPassword ? {borderColor: 'red'} : {}}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </Form.Group>
          <button 
            variant="primary" 
            type="submit"
            className="submit-button"
            onClick={handleSubmit}
          > 
            SIGN IN
          </button>
{/* 
          <Button 
            variant="primary" 
            type="submit"
            className="submit-button"
            onClick={handleSubmit}
          >
            SIGN IN
          </Button> */}

          <p className="login-forgot-password" >
            <a href="/forgotpassword">Forgot password?</a>
          </p>

          <hr className= "login-hr"></hr>

          <p className="login-or-text">or</p>

          <div className="login-google-button">
            <GoogleAccount/>
            <FacebookAccount/>
          </div>
          
          <div className="sing-up-div">
            <label>Don’t have an account? <a href="/newAccount">Sign up</a></label> 
          </div>
        </Form>
          
      </Layout>
  );
 
}

export default Login;