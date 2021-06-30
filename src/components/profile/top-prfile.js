import React, { useEffect, useState }  from 'react';
import CircularImage from '../CircularImage/CircularImage';
import axios from "axios";
import Posts from "../Posts/Posts";

import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import * as FaIcons from 'react-icons/ai';
import * as BoxIcons from "react-icons/bi";
import Edit from "../../images/edit.png"
import PhoneInput from "react-phone-input-2";
import TimePicker from 'react-time-picker';

import "./profile.scss";
import Contact from './contact';
import EditContact from './edit-contact';



const TopProfile = ({name, photo}) =>  {
    return (
        <div className="top-profile">
                    <div className="cover-img">
                        <div className="photo-name">
                            <div>
                                <CircularImage image={photo} style={{width: '180px', height: '180px', border: '2px solid #E0E8E8'}}/>
                            </div>
                            <h2> {name}</h2>
                        </div>
                        
                    </div>
                </div>
    );
}

export default TopProfile;