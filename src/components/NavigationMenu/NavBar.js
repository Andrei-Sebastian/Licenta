import React, { Component } from 'react';
import {Navbar, Button, FormControl, Form, Nav, Link, NavDropdown} from 'react-bootstrap'
import './NavBar.css';
import CircularImage from '../CircularImage/CircularImage';
import logo from '../../Images/logo.png';


class navBarComponent extends Component {


    render() {  
        return (
          // <Navbar bg="dark" variant="dark" className="navBar">
          //   <Navbar.Brand className="d" href="#home">
          //     {/* <img src={logo} onClick={ () =>{ window.scrollTo(0, 0) } }/> */}
          //     <CircularImage image={logo} onClick={ () =>{window.location.reload(false); window.scrollTo(0, 0); } }/>
          //   </Navbar.Brand>
          //   <Nav className="mr-auto">
          //     <Nav.Link href="#features">Features</Nav.Link>
          //     <Nav.Link href="#pricing">Pricing</Nav.Link>
          //   </Nav>
          //   <Form inline className="search">
          //     <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          //     <Button variant="outline-info">Search</Button>
          //   </Form>
          //   <div className="right">
          //     Ana are mere
          //   </div>
          // </Navbar>
          <Navbar className="navBar" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <CircularImage className="refreshIcon" image={logo} onClick={ () =>{window.location.reload(false); window.scrollTo(0, 0); } }/>
            <Navbar.Toggle className="idk" aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">

              <Nav className="mr-auto">
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
              </Nav>

              <Nav>
                <Nav.Link href="#deets">More deets</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">Dank memes</Nav.Link>
                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
              </Nav>

            </Navbar.Collapse>
          </Navbar>
        )
    };
};

export default navBarComponent;