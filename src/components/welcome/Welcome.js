import './Welcome.css';
import React, {useEffect}  from 'react';
import Post from '../Posts/Posts';
import NavBar from '../NavigationMenu/NavBar';
import LeftMenu from '../LeftMenu/LeftMenu';
import {useHistory} from "react-router-dom";

const Welcome = () => {
    const history = useHistory();

    useEffect(() => {
        if(!localStorage.getItem('user-info')) {
            history.push('/login');
        }
    });

    return (
        <div className="App">
        <NavBar/>
        <div className="page">
          <LeftMenu/>
          <Post/>
        </div>
        <h1>.</h1> 
      </div> 
    );
}

export default Welcome;
