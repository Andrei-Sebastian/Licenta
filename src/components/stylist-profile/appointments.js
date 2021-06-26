import React, { useEffect, useState }  from 'react';
import LayoutStylist from '../layout-hairstylist';
import Agenda from './components/agenda';

const Appointments = () =>  {
      return (
        <LayoutStylist>
            <div className="my-schadule">
                <h1>Appointments</h1>
                <Agenda/>
            </div>
            
        </LayoutStylist>
    );
}

export default Appointments;