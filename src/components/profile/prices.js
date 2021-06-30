import React, { useEffect, useState }  from 'react';
import Typography from '@material-ui/core/Typography';
import * as FaIcons from 'react-icons/ai';
import * as BoxIcons from "react-icons/bi";



const Prices = ({editable, prices, clickEdit}) =>  {
    return (
        <div className="stylist-data">
        <div className="about-data">
            <div className="title-about">
                <Typography component="legend">Prices</Typography>
                {editable && <div className="edit-title" onClick={clickEdit}/>}
            </div>
            <hr/>
            <div className="contact-data">
                <div>
                    <p>Regular:</p>
                    <p>New look:</p>
                    <p>Modern haircut:</p>
                </div>

                <div className="contact-r">
                    <p>{prices.regular} LEI</p>
                    <p>{prices.newLook} LEI</p>
                    <p>{prices.modern} LEI</p>
                </div>
            </div>
        </div>
        
    </div>
    );
}

export default Prices;