import React, { Component } from 'react';
import {Navbar, Button, FormControl, Form, Nav } from 'react-bootstrap'
import './NavBar.css';
import icon from '../../Images/icon.png'


class navBarComponent extends Component {


    render() {  
        return (
          <div className="navBar">
            <Navbar bg="dark" variant="dark">
              <Navbar.Brand href="#home"><img src={icon} onClick={() =>{console.log("window.location.reload();")}}/></Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
              </Nav>
              <Form inline className="search">
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
              </Form>
            </Navbar>
          </div>
        )
    };
};

export default navBarComponent;