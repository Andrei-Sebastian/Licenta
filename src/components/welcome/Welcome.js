import './Welcome.css';
import React, {Component, useEffect}  from 'react';
import Post from '../Posts/Posts';
import NavBar from '../NavigationMenu/NavBar';
import LeftMenu from '../LeftMenu/LeftMenu';
import {useHistory} from "react-router-dom";
import axios from 'axios';
import Login from '../Login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

class Welcome extends Component  {
    //const history = useHistory();
    state = {
      posts: [], 
      isLogin: true};


    componentDidMount = () => {
      if(localStorage.getItem('user-info')) {
        axios.get(`http://localhost:8080/welcome`,
        {
          headers: {
            Authorization: localStorage.getItem("user-info"),
          }
        })
        .then(res => {
          this.isLogin = true; 
          let data = res.data.posts;
          console.log(data);
          this.setState({posts: data, isLogin: true});
        })
        .catch(() => {
          localStorage.removeItem('user-info');
          this.setState({isLogin: false});
        });
      } else {
        this.setState({isLogin: false});
        
      }
    }


    render() {
      console.log( this.state.posts)
      if (this.state.isLogin === false) {
        return <Redirect to='/login' />
      }
      return (
        <div className="App">
        <NavBar/>
        <div className="page">
          <LeftMenu/>
          <Post posts={this.state.posts}/>
        </div>
        <h1>.</h1> 
      </div> 
    );
    }
    
    
}

export default Welcome;
