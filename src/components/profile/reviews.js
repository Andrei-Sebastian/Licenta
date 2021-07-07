import React, { useEffect, useState }  from 'react';
import CircularImage from '../CircularImage/CircularImage';
import axios from "axios";
import Posts from "../Posts/Posts";

import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import TextArea from '../TextArea/TextArea';



const Reviews = ({reviews, rate, editable}) =>  {
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
            {!editable && <div>
                <hr/>
                <div className="send-review">
                    <div className="user-r info-review">
                        <CircularImage image={reviews[0].photo} style={{width: '30px', height: '30px', marginLeft: "10px"}}/>
                        <label>{reviews[0].name}</label>
                        <Rating name="read-only" size="small"  value={reviews[0].rate} readOnly />
                    </div>
                    <TextArea />
                    <div className="btn-re">
                        <button className="btn-re">Send</button>
                    </div>
                </div>
            </div>}
           
        </div>
    );
}

export default Reviews;