import React, { useEffect, useState }  from 'react';
import Typography from '@material-ui/core/Typography';
import * as FaIcons from 'react-icons/ai';
import * as BoxIcons from "react-icons/bi";



const About = ({editable, clickEdit, text}) =>  {
    return (
        <div className="stylist-data">
            <div className="about-data">
                <div className="title-about">
                    <Typography component="legend">About</Typography>
                    {editable && <div className="edit-title" onClick={clickEdit}/>}
                </div>

                <hr/>

                {text ?
                    <p>{text}</p>:
                    <p>I like very much my profession.</p>
                }
            </div>
        </div>
    );
}

export default About;