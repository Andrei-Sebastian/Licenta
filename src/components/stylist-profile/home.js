import React, { useEffect, useState }  from 'react';
import CircularImage from '../CircularImage/CircularImage';
import LayoutStylist from '../layout-hairstylist';
import Agenda from './components/agenda';
import { Add, Remove } from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./rightbar.css";
import TopWelcome from '../TopWelcome/top-welcome';
import Profile from '../profile/profile';



const Home = () =>  {
    const user = {url_photo:"https://www.freeiconspng.com/thumbs/favorites-icon-png/favorites-star-icon-png-0.png" ,name: "andrei"}
      return (
        <LayoutStylist>
            <Profile/>
        </LayoutStylist>
    );
}

export default Home;