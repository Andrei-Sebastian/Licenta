import './Welcome.css';
import React, {Component}  from 'react';
import Post from '../Posts/Posts';
import Loading from '../Loading/Loading';
import NavBar from '../NavigationMenu/NavBar';
import LeftMenu from '../LeftMenu/LeftMenu';
import TopWelcome from '../TopWelcome/TopWelcome';
import axios from 'axios';
import {Redirect} from "react-router-dom";

class Welcome extends Component  {
    state = {
      posts: [],
      user: [], 
      isLogin: true,
      isLoading: true
    };


    componentDidMount = () => {
      if(localStorage.getItem('user-info')) {
        axios.get(`http://localhost:8080/welcome`,
        {
          headers: {
            Authorization: localStorage.getItem("user-info"),
          }
        })
        .then(res => {
          this.setState({
            posts: res.data.posts,
            user: res.data.userDetails, 
            isLogin: true, 
            isLoading: false});
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
      if (this.state.isLogin === false) {
        return <Redirect to='/login' />
      }
      return (
        <div className="App">
        <NavBar/>
        {this.state.isLoading ? 
          <Loading/> : 
          <div className="page">
            <LeftMenu user={this.state.user}/>
            <TopWelcome user={this.state.user}/>
            <Post posts={this.state.posts}/>
          </div>
        }
      </div> 
    );
    } 
}

export default Welcome;
