import React, { useEffect, useState }  from 'react';
import CircularImage from '../CircularImage/CircularImage';

import "./profile.scss";



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