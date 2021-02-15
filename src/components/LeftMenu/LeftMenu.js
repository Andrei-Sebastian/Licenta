import React, { Component } from 'react';
import CircularImage from '../CircularImage/CircularImage';
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
                <CircularImage image="https://w7.pngwing.com/pngs/317/713/png-transparent-scissors-computer-icons-scissors-scissors-icon-text-logo-symbol.png" style={{width: '25px', height: '25px'}}/>
                <label className="progText">Your appointment</label>
                <div>
                    {this.props.user.app ? null : <label className="red">No yet</label> }
                </div> 
            </div>

        </div>
    }
}

export default LeftMenu;