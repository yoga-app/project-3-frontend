import React, { Component } from 'react';
import './about-us.css';
import MapContainer from '../googleMap/MapContainer.js'

class AboutUs extends Component {
  render() {
    return (
      <div className="about-us">
        <div className="about-your-guruji">

        </div>
        <MapContainer />
      </div>
    );
  }
}

export default AboutUs;