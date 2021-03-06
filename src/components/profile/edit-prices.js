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



const EditPrices = ({prices, clickSave, clickClose}) =>  {
    const [priceR, setPriceR] = useState(prices.regular);
    const [priceN, setPriceN] = useState(prices.newLook);
    const [priceM, setPriceM] = useState(prices.modern);

    return (
        <div className="stylist-data">
            <div className="about-data">
                <Typography component="legend">Prices:</Typography>
                <hr/>
                <div className="contact-data">
                    <div>
                        <p>Regular:</p>
                        <p>New look:</p>
                        <p>Modern haircut:</p>
                    </div>

                    <div>
                        <input value={priceR} className="text-field price-text" onChange={(e) => {
                            setPriceR(e.target.value);
                        }}/>
                        <br/>
                        <input value={priceN} className="text-field price-text" onChange={(e) => {
                            setPriceN(e.target.value);
                        }}/>
                        <br/>
                        <input value={priceM} className="text-field price-text" onChange={(e) => {
                            setPriceM(e.target.value);
                        }}/>
                    </div>

                    <div className="lei">
                        <p>LEI</p>
                        <p>LEI</p>
                        <p>LEI</p>
                    </div>
                </div>
            </div>
                            
            <div className="group-btn">
                <button className="save-btn profile-btn" onClick={() => clickSave({modern: priceM, regular: priceR, newLook: priceN})}>Save</button>
                <button className="close-btn profile-btn" onClick={clickClose}>Close</button>
            </div>        
        </div>
    );
}

export default EditPrices;