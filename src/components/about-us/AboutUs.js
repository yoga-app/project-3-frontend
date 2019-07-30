import React, { Component } from 'react';
import './about-us.css';
import MapContainer from '../googleMap/MapContainer.js'

class AboutUs extends Component {
  render() {
    return (
      <div className="about-us">
        <p>test about us</p>
        <MapContainer width={'70%'} height={'70%'}/>
      </div>
    );
  }
}

export default AboutUs;