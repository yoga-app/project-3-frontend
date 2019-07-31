import React, { Component } from 'react';
import './about-us.css';
import MapContainer from '../googleMap/MapContainer.js'

class AboutUs extends Component {
  render() {
    return (
      <div className="about-us">
        <div className="about-us2">
          <p>Welcome to Kukee Bliss Yoga! <br/><br/>Experience the best things in life with a clear mind and healthy body.  <br/>Whether you are trying yoga for the first time, returning from a long break, or already enjoying the benefits of the practice, we have a sequence made just for you! <br/><br/>In case you are wondering why our prices are so low, here’s the reason: <br/>Everyone could enjoy a richer life by continuously practicing awareness of their bodies. When we step onto our mats, we are setting intentions for ourselves – to maintain the proper function of our bodies, prevent back injuries, avoid joint deterioration, boost our mood, and gain mental focus. Yoga helps you achieve all these, but many people hesitate to practice it consistently because of the high costs and studio memberships associated with it. To encourage you to take control of your well-being, we make our classes affordable and even offer class packages to save you more money! <br/><br/>There is a beautiful world out there waiting for you to explore it, why not experience every step of the journey as your best self? <br/><br/>Grab a mat, set your purpose, and  <br/><span className="live-your-happiness">live your happiness!</span> <br/>Valeria.</p>
        </div>
        <div className="map-wrap">
          <MapContainer width={'650px'} height={'450px'}/>
        </div>
      </div>
    );
  }
}

export default AboutUs;