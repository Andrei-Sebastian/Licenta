// import {GoogleApiWrapper} from 'google-maps-react';
import React, {Component} from "react";
 
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { truncate } from "prelude-ls";
 
export class MapContainer extends Component {
    state = {
      coords: { lat: 47.6464822, lng: 26.256426299999998},
      loaded: false
    };

    componentDidMount = () => {
        const obj = {
            lat: this.props.lt, 
            lng: this.props.lg 
        }
        this.setState({
            coords: obj,
            loaded: true
        });
    }
   
    render() {
      return (
          <div>
            {this.state.loaded && 
                <Map google={window.google} initialCenter={this.state.coords}>
                    <Marker />
                </Map>
            }
          </div>
        
      )
    }
  }
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyA-3TAV8f1KDzKRVQLgsMYIN788GjEjkfM")
})(MapContainer)