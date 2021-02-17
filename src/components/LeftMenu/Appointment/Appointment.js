import React, { Component } from 'react';
import './Appointment.css';

class Appointment extends Component {

    render () {
        return (
        <div className="appointment">
            <p className="appointmentTitle">Your appointment</p>
            <div>
                <div className="appointmentTime">
                    <img className="appointmentIcon" src="https://res.cloudinary.com/dm3pamnau/image/upload/v1613555493/folder_p/calendar_n3dviy.svg"/>
                    <div>
                        <label className='appointmentText' style={{'marginBottom': 0}}>Date:</label> 
                        <label className='appointmentText1' style={{'marginBottom': 0}}>{this.props.appointment.date ? this.props.appointment.date : "N/A"}</label>
                        <br/>
                        <label className='appointmentText'>Time:</label>
                        <label className='appointmentText1'>{this.props.appointment.time ? this.props.appointment.time : "N/A"}</label>
                    </div>
                    
                </div>

                <div>
                <img className="appointmentIcon" src="https://res.cloudinary.com/dm3pamnau/image/upload/v1613555635/folder_p/barber_evuu5d.svg"/>
                    <label className='appointmentText'>Hair-Stylist:</label>
                    <label className='appointmentText1'>{this.props.appointment.name ? this.props.appointment.name : "N/A"}</label>
                </div>
                <div>
                <img className="appointmentIcon" src="https://res.cloudinary.com/dm3pamnau/image/upload/v1613555807/folder_p/location-map_ffyqrl.svg"/>
                    <label className='appointmentText'>Location: </label>
                    <label className='appointmentText1'>{this.props.appointment.location ? this.props.appointment.location : "N/A"}</label>
                </div>
                <div></div>
            </div>

        </div>
        )
    }
}

export default Appointment;