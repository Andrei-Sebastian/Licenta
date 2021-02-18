import React, { Component } from 'react';
import CircularImage from '../CircularImage/CircularImage';
import Appointment from './Appointment/Appointment'; 
import './LeftMenu.css';

class LeftMenu extends Component {

    render () {
        return <div className="menu">
            <div className="userProfile">
                <CircularImage image={this.props.user.url_photo}/>
                <label className="userNamee">{this.props.user.name}</label>
            </div>
            <div className="userProfile">
                <CircularImage image="https://www.freeiconspng.com/thumbs/favorites-icon-png/favorites-star-icon-png-0.png"/>
                <label className="userNamee">My favorite posts</label>
            </div>
            <div className="userProfile">
                <CircularImage image="https://www.pinclipart.com/picdir/middle/7-79717_clipart-resolution-600589-add-to-favorites-icon-png.png"/>
                <label className="userNamee">My favorite Hair-Htylist</label>
            </div>
            <div className="userProfile">
                <CircularImage image="https://cdn2.iconfinder.com/data/icons/multimedia-ui-6/100/LAST_ONE-512.png"/>
                <label className="userNamee">Last Hair-Htylist</label>
            </div>
            <div className="userProfile">
                <CircularImage image="https://freepikpsd.com/wp-content/uploads/2020/07/events-icon-png-7-Transparent-Images.png"/>
                <label className="userNamee">Events</label>
            </div>
            <div className="userProfile">
                <CircularImage image="https://www.vhv.rs/dpng/d/2-23844_google-map-vector-png-transparent-png.png"/>
                <label className="userNamee">Map</label>
            </div>
            <div className="prog">
                <Appointment appointment={this.props.appointment}/>
            </div>

        </div>
    }
}

export default LeftMenu;