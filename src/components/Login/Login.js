import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import axios from 'axios';
import $ from 'jquery';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const validateForm =  (() => {
    return true;
  });

  const handleSubmit = ((event) => {
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
      history.push("/welcome");
    })
    .catch (err => {
      console.log(err);
    });
  });

  useEffect(() => {
    if(localStorage.getItem('user-info')) {
      history.push("/welcome");
    }
  });
  

  return (
    <div className="Login">
      <p>Login</p>
      <Form >
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </Form.Group>
        <Button disabled={!validateForm()} onClick={handleSubmit}> 
          Login
        </Button>
        <Button onClick={() => {history.push("/register");}}> 
          Register
        </Button>
      </Form>
    </div>
  );
}

export default Login;