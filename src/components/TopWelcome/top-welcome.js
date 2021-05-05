import React from 'react';

import './top-welcome.scss';
import CircularImage from '../CircularImage/CircularImage';

const TopWelcome = (props) => {
    return (
        <div className="welcome-user">
            <div>
                <CircularImage image={props.user.url_photo} style={{width: '160px', height: '160px'}}/>
            </div>
            <hr/>
            <h2>Welcome {props.user.name}!</h2>
        </div>
    )
};

export default TopWelcome;