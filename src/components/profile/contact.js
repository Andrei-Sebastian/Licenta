import React, { useEffect, useState }  from 'react';
import Typography from '@material-ui/core/Typography';
import * as FaIcons from 'react-icons/ai';
import * as BoxIcons from "react-icons/bi";
import Map from "../welcome/map"



const Contact = ({lt, lg, editable, address, phone, mail, clickEdit}) =>  {
    return (
        <div className="stylist-data">
                <div className="about-data">
                    <div className="title-about">
                        <Typography component="legend">Contact</Typography>
                        {editable && <div className="edit-title" onClick={clickEdit}/>}
                    </div>
                    
                    <hr/>

                    <div className="contact-data">
                        <p><BoxIcons.BiPhone />Phone:</p>
                        <p className="contact-r">+{phone}</p>
                    </div>

                    <div className="contact-data">
                        <p><FaIcons.AiOutlineMail />Mail:</p>
                        <p className="contact-r">{mail}</p>
                    </div>

                    <div className="contact-data">
                        <p><BoxIcons.BiMap />Address:</p>
                        <p className="contact-r">{address.text}</p>
                    </div>
                    <div className="show-map">
                        <Map lt={lt} lg={lg} />
                    </div>
                </div>
        </div>
    );
}

export default Contact;