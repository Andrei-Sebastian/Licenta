// import {GoogleApiWrapper} from 'google-maps-react';
import React, {useEffect, useState} from "react";
 
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
const MapContainer = ({lt, lg}) => {
      const [coords, setCoords] = useState({ lat: 47.6464822, lng: 26.256426299999998});
      const [loaded, setLoaded] = useState(false);

    useEffect(() => {
      if (lt || lg)
        setCoords({lat: lt, lng: lg})
        setLoaded(true);
    }, [])
   
      return (
          <div className="map-wrapp">
            {loaded && 
                <Map google={window.google} initialCenter={coords}>
                    <Marker />
                </Map>
            }
          </div>
        
      )
  }
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyA-3TAV8f1KDzKRVQLgsMYIN788GjEjkfM")
})(MapContainer)