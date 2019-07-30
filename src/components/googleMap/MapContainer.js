import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import { InfoWindow, Marker } from 'google-maps-react';


export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,  //Hides or the shows the infoWindow
      activeMarker: {},          //Shows the active marker upon click
      selectedPlace: {},         //Shows the infoWindow to the selected place upon a marker
      
    };
    
  }
  

  render() {

      return (
        <Map
        google={this.props.google}
        zoom={10}
        style={{width: this.props.width, height: this.props.height}}
        initialCenter={{
          lat: 34.852619,
          lng: -82.394012
        }}
        />
        );
     
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDFjd85G0ZOtOpRjJ42H9Q5nC0UqCdiQ9g'
})(MapContainer);