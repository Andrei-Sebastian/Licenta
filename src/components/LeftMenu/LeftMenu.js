import React, { Component } from 'react';
import CircularImage from '../CircularImage/CircularImage';
import Appointment from './Appointment/Appointment'; 
import './LeftMenu.scss';
import Map from "../welcome/map"
import Rating from '@material-ui/lab/Rating';

class LeftMenu extends Component {

    render () {
        return <div className="menu">
            <div className="prog-top">
                <p className="appointmentTitle">Your favorite Hair Stylist</p>
                <hr />
                <div className="">
                <div className="flex-class">
                    <CircularImage image={this.props.appointment.photoStylist} style={{width: '50px', height: '50px'}}/>
                    <p className="userName"><a href={"/profile/" + this.props.appointment.sid}>{this.props.appointment.nameStylist}</a></p>
                    <div className="rate">
                        <Rating name="read-only" size="small"  value={4.5} readOnly  precision={0.01}/>
                        <p>(4.5)</p>
                    </div>
                    
                </div>
                    
                </div>
            </div>
            <br/>
            <div className="prog">
                <Appointment appointment={this.props.appointment}/>
                <div className="nav-prog">
                    <Map 
                        lt={this.props.appointment.location ? this.props.appointment.location.lt : 0} 
                        lg={this.props.appointment.location ? this.props.appointment.location.lg : 0} 
                    />
                </div>
            </div>

            
            
            

        </div>
    }
}

export default LeftMenu;