import React, { Component } from 'react';
import './CircularImage.css';
import profileImage from '../../Images/profile.png';

class CircularImage extends Component {

    render () {
       return <img className="circular_image" src={this.props.image ? this.props.image : profileImage} alt="Not found" onClick={this.props.onClick}/>
    }
}

export default CircularImage;