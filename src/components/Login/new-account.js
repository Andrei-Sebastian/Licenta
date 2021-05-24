import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import axios from 'axios';
import GoogleAccount from './button-google-account';
import FacebookAccount from './button-facebook-account';
import Layout from "./layout";

const NewAccount = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [wrongEmail, setWrongEmail] = useState(false);
  const [wrongPassword, setWrongPassword] = useState(false);

 const validateForm =  () => {
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
        
    let params = {
        email: email,
        password: password,
      };
  
      axios.post(`http://localhost:8080/register`,
        params,
        {
          headers: { 
            "Content-Type": "application/json",
            "Accept": "application/json"
          }
        })
      .then( response => {
        console.log(response)
        localStorage.setItem('new-info', response.data.accessToken);
        // if (response.data.accessToken.isNewAccount) {
          window.location.href='/register';
        // }    
      })
      .catch (err => {
        console.log(err);

        setWrongEmail(true);
        setWrongPassword(true);
      });
    } else {
      setWrongEmail(true);
        setWrongPassword(true);
    }
    
  }; 

  return (
    <Layout title="Create your account">
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

          <Form.Group size="lg" controlId="password">
            <Form.Label 
              className="password-label"
              style={confirmPassword.length > 0 ? {display: 'block'} :  {display: 'none'}}
            >Password</Form.Label>
            <Form.Control
              className="input-form input-password"
              type="password"
              value={confirmPassword}
              style={wrongPassword ? {borderColor: 'red'} : {}}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Password"
            />
          </Form.Group>

          <button 
            variant="primary" 
            type="submit"
            className="submit-button"
            onClick={handleSubmit}
          > 
            SIGN UP
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

          <hr className= "login-hr"></hr>

          <p className="login-or-text">or</p>

          <div className="login-google-button">
            <GoogleAccount/>
            <FacebookAccount/>
          </div>

          <div className='back-to-login-div' onClick={() => window.location.href = "/login"}>
            <img 
              className='back-to-login-icon' 
              alt="Back to login"
              loading="lazy"
              src='https://cdn2.iconfinder.com/data/icons/pittogrammi/142/27-512.png'
            />
          <label className='back-to-login-label'>Back to login</label>
        </div>
        </Form>
          
      </Layout>
  );
 
}

export default NewAccount;