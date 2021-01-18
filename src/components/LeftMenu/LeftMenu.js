import React, { Component } from 'react';
import CircularImage from '../CircularImage/CircularImage';
import './LeftMenu.css';

class LeftMenu extends Component {

    render () {
        return <div className="menu">
            <div className="userProfile">
                <CircularImage></CircularImage>
                <label className="userNamee">Ionsecu Vladimir</label>
            </div>

        </div>
    }
}

export default LeftMenu;