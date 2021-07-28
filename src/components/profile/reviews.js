import React, { useEffect, useState }  from 'react';
import CircularImage from '../CircularImage/CircularImage';
import axios from "axios";

import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import TextArea from '../TextArea/TextArea';



const Reviews = ({reviews, rate, editable}) =>  {
    const [value, setValue] = useState(0);
    const [text, setText] = useState(0);
    const [disabled, setDisabled] = useState(true);
    useEffect(()=> {
        if(text.length > 3)
            setDisabled(false);
    })
    return (
        <div className="stylist-data">
            <div className="stylist-rate about-data">
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
                        <Rating
                            name="half-rating"
                            value={value}
                            precision={0.5}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                        />

                            </div>
                    <TextArea value={text} onChange={(e)=>{setText(e.target.value)}}/>
                    <div className="btn-re">
                        <button 
                            disabled={disabled}
                            className="btn-re" 
                            onClick={() => {
                                
                            }}
                        >Send</button>
                    </div>
                </div>
            </div>}
           
        </div>
    );
}

export default Reviews;