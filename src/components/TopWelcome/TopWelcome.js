import React from 'react';
import './TopWelcome.css';
import CircularImage from '../CircularImage/CircularImage';

const TopWelcome = (props) => {
    return (
        <div className="welcome">
            <div className="imageUser">
                <CircularImage image={props.user.url_photo} style={{width: '160px', height: '160px'}}/>
            </div>
            <hr className="line1"/>
            <h2>Welcome {props.user.name}!</h2>
        </div>
    )
};

export default TopWelcome;