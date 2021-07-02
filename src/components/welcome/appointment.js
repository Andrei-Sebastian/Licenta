import React, { useEffect, useState }  from 'react';
import Layout from '../layout';
import Agenda from '../stylist-profile/components/agenda';
import { BiArrowBack } from "react-icons/bi";

const Appointment = () =>  {
      return (
        <Layout>
            <div className="my-schadule">
                <div className="back-login-angenda">
                    <a href={"/profile/" + window.location.href.split("/")[window.location.href.split("/").length - 1]}>Back to profile</a>
                </div>
                
                <Agenda user={true}/>
            </div>
            
        </Layout>
    );
}

export default Appointment;