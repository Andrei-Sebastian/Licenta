import './Welcome.scss';
import React, {Component}  from 'react';
import Post from '../Posts/Posts';
import Loading from '../Loading/Loading';
import LeftMenu from '../LeftMenu/LeftMenu';
import TopWelcome from '../TopWelcome/top-welcome';
import axios from 'axios';
import {Redirect} from "react-router-dom";
import Layout from "../layout";
import RightMenu from './right-menu';

class Welcome extends Component  {
    state = {
      posts: [],
      user: [],
      appointment:{}, 
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
            appointment: res.data.appointment,
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
        <Layout>
          {this.state.isLoading ? 
            <Loading style={{marginTop: '70px', textAlign: 'center'}}/> : 
            <div className="page">
              <LeftMenu user={this.state.user} appointment={this.state.appointment}/>
              <TopWelcome user={this.state.user}/>
              <Post posts={this.state.posts}/>
              <RightMenu/>
            </div>
          }
        </Layout>
    );
    } 
}

export default Welcome;
