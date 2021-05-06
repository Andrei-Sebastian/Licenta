import React, {Component} from 'react';
import './Register.css';

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {Redirect} from "react-router-dom";
import ExpiredToken from '../ExpiredToken/ExpiredToken'; 
import axios from 'axios';
import $ from 'jquery';

class Register extends Component{
  state = {
    email: '',
    password: '',
    confirmPassword: '',
    logged: false,
    wrongPassword: false,
    wrongConfirmPassword: false
  }

//   constructor(props) {
//     super(props);
//     let params = {
//       resetToken: this.props.match.params.id
//     }
//     axios.get(`http://localhost:8080/verify/token`,{params})
//     .catch (err => {
//       this.state.expiredToken = true;
//       this.setState(this.state);
//     });
//   }

  validateForm =  (() => {
    return true;
  });

    handleSubmit = ((event) => {
        event.preventDefault();
        if (this.state.password.length === 0) {
            this.state.wrongPassword = true;
            this.setState(this.state);
            alert("Password input cannot be empty");
        } else if (this.state.wrongConfirmPassword.length === 0) {
            this.state.wrongConfirmPassword = true;
            this.setState(this.state);
            alert("Confirm password input cannot be empty");
        } else if (this.state.password !== this.state.confirmPassword) {
            this.state.wrongConfirmPassword = true;
            this.state.wrongPassword = true;
            this.setState(this.state);
            alert("New password and Confirm password input cannot be different");
        } else {
            let params = {
                    email: this.state.email,
                    password: this.state.password,
                    confirmPassword: this.state.confirmPassword
            };
      
            axios.post(`http://localhost:8080/reset/password`,
                params,
                {
                headers: { 
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
                })
            .then( response => {
                alert("Password has been changed")
                this.state.login = true;
                this.setState(this.state);
            })
            .catch (err => {
                this.state.wrongConfirmPassword = true;
                this.state.wrongPassword = true;
                this.setState(this.state);
            });
        }
    
    });

  componentDidMount() {
    if (localStorage.getItem('user-info')) {
      this.state.logged = true;
      this.setState(this.state);
    }
  };

    render() {
        if (this.state.logged) {
            return <Redirect to="/welcome"/>;
        }

        return (
        <div className="login-page-div">
            <div className="login-form">
            <p className="login-title">Create Account</p>
            <Form >
                <Form.Group size="lg" controlId="password">
                <Form.Label 
                    className="email-label"
                    style={this.state.password.length > 0 ? {display: 'block'} :  {display: 'none'}}
                >Password</Form.Label>
                <Form.Control
                    className="input-form input-password"
                    autoFocus
                    type="password"
                    // value={this.state.email}
                    style={this.state.wrongPassword ? {'border-color': 'red'} : {}}
                    onChange={(e) => {
                    this.state.password = e.target.value;
                    this.setState(this.state);
                    }}
                    placeholder="Password"
                />
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                <Form.Label 
                    className="password-label"
                    style={this.state.confirmPassword.length > 0 ? {display: 'block'} :  {display: 'none'}}
                >Confirm password</Form.Label>
                <Form.Control
                    className="input-form input-password"
                    type="password"
                    // value={this.state.password}
                    style={this.state.wrongConfirmPassword ? {'border-color': 'red'} : {}}
                    onChange={(e) => {
                    this.state.confirmPassword = e.target.value;
                    this.setState(this.state);
                    }}
                    placeholder="Confirm password"
                />
                </Form.Group>
                <button className="login-button" disabled={!this.validateForm()} onClick={this.handleSubmit}> 
                CHANGE
                </button>
            </Form>
            <hr style={{width: '100%', margin:'20px 0 20px 0'}}></hr>
            <div className='back-to-login-div' onClick={() => {this.state.login=true; this.setState(this.state);}}>
                <img className='back-to-login-icon' src='https://cdn2.iconfinder.com/data/icons/pittogrammi/142/27-512.png'></img>
            <label className='back-to-login-label'>Back to login</label>
            </div>
            </div>
        </div>
        );
  }
 
}

export default Register;

// const register = (props) => {
//         return (
//             <div className="container register">
//                 <div className="row">
//                     {/* <div className="col-md-3 register-left">
//                         <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=""/>
//                         <h3>Welcome</h3>
//                         <p>You are 30 seconds away from earning your own money!</p>
//                         <input type="submit" name="" value="Login"/><br/>
//                     </div> */}
//                     <div className="col-md-9 register-right">
//                         <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
//                             <li className="nav-item">
//                                 <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Employee</a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Hirer</a>
//                             </li>
//                         </ul>
//                         <div className="tab-content" id="myTabContent">
//                             <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
//                                 <h3 className="register-heading">Apply as a Employee</h3>
//                                 <div className="row register-form">
//                                     <div className="col-md-6">
//                                         <div className="form-group">
//                                             <input type="text" className="form-control" placeholder="First Name *" value="" />
//                                         </div>
//                                         <div className="form-group">
//                                             <input type="text" className="form-control" placeholder="Last Name *" value="" />
//                                         </div>
//                                         <div className="form-group">
//                                             <input type="password" className="form-control" placeholder="Password *" value="" />
//                                         </div>
//                                         <div className="form-group">
//                                             <input type="password" className="form-control"  placeholder="Confirm Password *" value="" />
//                                         </div>
//                                         <div className="form-group">
//                                             <div className="maxl">
//                                                 <label className="radio inline"> 
//                                                     <input type="radio" name="gender" value="male" checked />
//                                                     <span> Male </span> 
//                                                 </label>
//                                                 <label className="radio inline"> 
//                                                     <input type="radio" name="gender" value="female" />
//                                                     <span>Female </span> 
//                                                 </label>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="col-md-6">
//                                         <div className="form-group">
//                                             <input type="email" className="form-control" placeholder="Your Email *" value="" />
//                                         </div>
//                                         <div className="form-group">
//                                             <input type="text" minlength="10" maxlength="10" name="txtEmpPhone" className="form-control" placeholder="Your Phone *" value="" />
//                                         </div>
//                                         <div className="form-group">
//                                             <select className="form-control">
//                                                 <option className="hidden"  selected disabled>Please select your Sequrity Question</option>
//                                                 <option>What is your Birthdate?</option>
//                                                 <option>What is Your old Phone Number</option>
//                                                 <option>What is your Pet Name?</option>
//                                             </select>
//                                         </div>
//                                         <div className="form-group">
//                                             <input type="text" className="form-control" placeholder="Enter Your Answer *" value="" />
//                                         </div>
//                                         <input type="submit" className="btnRegister"  value="Register"/>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="tab-pane fade show" id="profile" role="tabpanel" aria-labelledby="profile-tab">
//                                 <h3  className="register-heading">Apply as a Hirer</h3>
//                                 <div className="row register-form">
//                                     <div className="col-md-6">
//                                         <div className="form-group">
//                                             <input type="text" className="form-control" placeholder="First Name *" value="" />
//                                         </div>
//                                         <div className="form-group">
//                                             <input type="text" className="form-control" placeholder="Last Name *" value="" />
//                                         </div>
//                                         <div className="form-group">
//                                             <input type="email" className="form-control" placeholder="Email *" value="" />
//                                         </div>
//                                         <div className="form-group">
//                                             <input type="text" maxlength="10" minlength="10" className="form-control" placeholder="Phone *" value="" />
//                                         </div>


//                                     </div>
//                                     <div className="col-md-6">
//                                         <div className="form-group">
//                                             <input type="password" className="form-control" placeholder="Password *" value="" />
//                                         </div>
//                                         <div className="form-group">
//                                             <input type="password" className="form-control" placeholder="Confirm Password *" value="" />
//                                         </div>
//                                         <div className="form-group">
//                                             <select className="form-control">
//                                                 <option className="hidden"  selected disabled>Please select your Sequrity Question</option>
//                                                 <option>What is your Birthdate?</option>
//                                                 <option>What is Your old Phone Number</option>
//                                                 <option>What is your Pet Name?</option>
//                                             </select>
//                                         </div>
//                                         <div className="form-group">
//                                             <input type="text" className="form-control" placeholder="`Answer *" value="" />
//                                         </div>
//                                         <input type="submit" className="btnRegister"  value="Register"/>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//             </div>                            
//         )
// };

// export default register;