import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import axios from 'axios';

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
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button type="submit" disabled={!validateForm()} > 
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Login;