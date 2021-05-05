import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import axios from 'axios';
import GoogleAccount from './GoogleAccount';
import FacebookAccount from './FacebookAccount';
import Layout from "./layout";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [logged, setLogged] = useState(false);
  const [resgiser, setResgiser] = useState(false);
  const [forgot, setForgot] = useState(false);
  const [wrongEmail, setWrongEmail] = useState(false);
  const [wrongPassword, setWrongPassword] = useState(false);

  // useEffect(() => {
  //   if(localStorage.getItem('user-info')) {
  //     window.location.href = '/welcome';
  //   }  
  // });


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
          <Form.Group size="lg" controlId="email">
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
            className="submit-button"
            onClick={handleSubmit}
          > 
            SIGN IN
          </button>

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
            <label>Don’t have an account? <a href="/register">Sign up</a></label> 
          </div>
        </Form>
          
      </Layout>
  );
 
}

export default Login;