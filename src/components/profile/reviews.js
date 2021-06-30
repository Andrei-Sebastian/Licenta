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



const Reviews = ({reviews, rate}) =>  {
    return (
        <div className="stylist-data">
            <div className="stylist-rate about-data">
                {/* <Typography component="legend">Reviews:</Typography> */}
                <p className="p-reviews">Reviews:</p>
                <Rating name="read-only"   value={rate} readOnly precision={0.01}/>
                <Typography component="legend">({rate})</Typography>
            </div>
            <hr/>
            <div className="all-reviews">
                {reviews.length > 0 ? reviews.map(el =>{
                    return (
                        <div className="review-component">
                            <div className="review">
                                <div className="info-review">
                                    <CircularImage image={el.photo} style={{width: '30px', height: '30px', marginLeft: "10px"}}/>
                                    <label>{el.name}</label>
                                </div>
                                
                                <div className="user-review">
                                    <Rating name="read-only" size="small"  value={el.rate} readOnly />
                                </div>
                                <label>({el.rate})</label>

                                
                            </div>
                            {el.text && <p>{el.text}</p>}
                        </div>
                    );
                }) :
                <p>No review so far</p>}
            </div>
        </div>
    );
}

export default Reviews;