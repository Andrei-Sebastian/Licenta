import React, { useEffect, useState }  from 'react';
import "./profile.scss";
import LayoutStylist from '../layout-hairstylist';
import Demo from './left-profile';

const StylistProfile = () =>  {
      return (
        <LayoutStylist>
            <div className="my-schadule">
                <h1>Appointments</h1>
                <Demo/>
            </div>
            
        </LayoutStylist>
    );
}

export default StylistProfile;