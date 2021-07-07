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
                    <CircularImage image={"https://res.cloudinary.com/dm3pamnau/image/upload/v1625151107/folder_p/photo_2021-02-28_20-48-59_eek0l3.jpg"} style={{width: '50px', height: '50px'}}/>
                    <p className="userName">{"Andrei Iriciuc"}</p>
                    <div className="rate">
                        <Rating name="read-only" size="small"  value={4.5} readOnly  precision={0.01}/>
                        <p>(4.5)</p>
                    </div>
                    
                </div>
                    
                </div>
            </div>
            <br/>
            {/* <div className="userProfile">
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
            </div> */}
            <div className="prog">
                <Appointment appointment={this.props.appointment}/>
                <div className="nav-prog">
                    <Map 
                        lt={47.6464822} 
                        lg={26.256426299999998} 
                    />
                </div>
            </div>

            
            
            

        </div>
    }
}

export default LeftMenu;