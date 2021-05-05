import React, { Component } from 'react';
import './CircularImage.css';
import profileImage from '../../images/profile.png';

class CircularImage extends Component {

    render () {
       return <img 
            className="circular_image" 
            src={this.props.image ? this.props.image : profileImage} 
            alt="Not found" 
            onClick={this.props.onClick} 
            style={this.props.style}
            loading="lazy"
        />
    }
}

export default CircularImage;