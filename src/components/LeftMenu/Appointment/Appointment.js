import React, { Component } from 'react';

import './appointment.scss';

import barberImg from '../../../images/welcome/barber.svg'
import CalendarImg from '../../../images/welcome/calendar.svg'
import LocationImg from '../../../images/welcome/location-map.svg'
import Map from "../../welcome/map"

class Appointment extends Component {

    render () {
        return (
        <div className="appointment">
            <p className="appointmentTitle">Your appointment</p>
            <div>
                <div className="appointmentTime">
                    <img 
                        className="appointmentIcon" 
                        src={CalendarImg}
                        width="512px"
                        height="512px"
                        alt="Data"
                        loading="lazy"
                        />
                    <div>
                        <div className="data-time-div">
                            <strong>Date:</strong> 
                            <label  >{this.props.appointment.date ? this.props.appointment.date : "N/A"}</label>
                        </div>
                        <strong>Time:</strong>
                        <label >{this.props.appointment.time ? this.props.appointment.time : "N/A"}</label>
                    </div>
                    
                </div>

                <div>
                    <img 
                        className="appointmentIcon" 
                        src={barberImg}
                        width="512px"
                        height="512px"
                        alt='Stylist'
                        loading="lazy"
                    />
                    <strong>Hair-Stylist:</strong>
                    <label >{this.props.appointment.name ? this.props.appointment.name : "N/A"}</label>
                </div>
                <div>
                    <img 
                        className="appointmentIcon" 
                        src={LocationImg}
                        width="512px"
                        height="512px"
                        alt='Location'
                        loading="lazy"
                    />
                    <strong>Location:</strong>
                    <label >{this.props.appointment.location ? this.props.appointment.location : "N/A"}</label>
                </div>
            </div>

        </div>
        )
    }
}

export default Appointment;