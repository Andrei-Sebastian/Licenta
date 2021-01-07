import React, { Component } from 'react';
import './CircularImage.css';

class CircularImage extends Component {

    render () {
       return <img className="circular_image" src={this.props.image} alt="Not found" onClick={this.props.onClick}/>
    }
}

export default CircularImage;