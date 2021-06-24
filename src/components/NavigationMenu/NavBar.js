import React, { Component } from 'react';
import {
  Navbar, 
  // Button, 
  // FormControl, 
  // Form, 
  Nav, 
  // Link, 
  // NavDropdown
} from 'react-bootstrap';
// import {Redirect} from "react-router-dom";
import './NavBar.css';
import CircularImage from '../CircularImage/CircularImage';
import logo from '../../images/logo.png';


class navBarComponent extends Component {
    render() {
        return (
          <Navbar className="navBar" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <div className="iconBar" onClick={ () =>{ window.location.href="/welcome" }}>
              <CircularImage  image={logo} />
              <label className="logoText">HairCut</label>
              {/* window.scrollTo(0, 0); */}
            </div>
            
            <Navbar.Toggle className="idk" aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            
              <Nav className="mr-auto">
                {/* <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link> */}
              </Nav>

              {/* <Nav>
                <NavDropdown id="collasible-nav-dropdown"> 
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <Nav.Link onClick={()=>{this.setState({addPost: true})}}>Add post</Nav.Link>
                  <Nav.Link onClick={()=>{window.location.reload(); localStorage.removeItem('user-info')}}>Log out</Nav.Link>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={()=>{window.location.reload(); localStorage.removeItem('user-info')}}>Log out</NavDropdown.Item>
                </NavDropdown>
              </Nav> */}

              <Nav>
                  <Nav.Link onClick={()=>{ window.location.href="/schedule" }}>Schedule</Nav.Link>
                  <Nav.Link onClick={()=>{window.location.reload(); localStorage.removeItem('user-info')}}>Log out</Nav.Link>
              </Nav>

            </Navbar.Collapse>
          </Navbar>
        )
    };
};

export default navBarComponent;