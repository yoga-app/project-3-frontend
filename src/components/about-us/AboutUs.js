import React, { Component } from 'react';
import './about-us.css';
import MapContainer from '../googleMap/MapContainer.js'

class AboutUs extends Component {
  render() {
    return (
      <div className="about-us">
        <div className="about-your-guruji">
          <h2>--about your teacher text--</h2>
          <p>Liquorice fruitcake cake sugar plum fruitcake. Gingerbread cake cheesecake. Powder carrot cake oat cake sweet roll biscuit cheesecake. Ice cream candy canes tiramisu sweet marshmallow. Toffee cookie soufflé icing pastry muffin chupa chups. Brownie pudding jujubes topping soufflé lemon drops tootsie roll. Tootsie roll fruitcake chupa chups jelly beans gummies gingerbread dragée. Lemon drops cotton candy halvah liquorice halvah biscuit. <br/><br/>Cheesecake jelly caramels jujubes. Powder topping fruitcake sweet roll cotton candy icing dessert sugar plum. Cake apple pie gummies macaroon croissant danish. Macaroon biscuit sesame snaps bear claw. Tiramisu sweet tart chocolate cake lemon drops. Ice cream tootsie roll marzipan cookie lollipop marshmallow tart pudding. Candy chupa chups dessert sugar plum marshmallow candy apple pie jujubes. Liquorice halvah danish carrot cake macaroon powder chupa chups.</p>
        </div>
        <div className="about-us2">
          <h2>Welcome to Kukee Bliss Yoga!</h2>
          <p>Experience the best things in life with a clear mind and healthy body.  <br/>Whether you are trying yoga for the first time, returning from a long break, or already enjoying the benefits of the practice, we have a sequence made just for you! <br/><br/>In case you are wondering why our prices are so low, here’s the reason: <br/>Everyone could enjoy a richer life by continuously practicing awareness of their bodies. When we step onto our mats, we are setting intentions for ourselves – to maintain the proper function of our bodies, prevent back injuries, avoid joint deterioration, boost our mood, and gain mental focus. Yoga helps you achieve all these, but many people hesitate to practice it consistently because of the high costs and studio memberships associated with it. To encourage you to take control of your well-being, we make our classes affordable and even offer class packages to save you more money! <br/><br/>There is a beautiful world out there waiting for you to explore it, why not experience every step of the journey as your best self? <br/><br/>Grab a mat, set your purpose, and  <br/><span className="live-your-happiness">live your happiness!</span> <br/><br/>Valeria</p>
        </div>
        <div className="our-mission">
          <h2>--mission statement--</h2>
          <p>Liquorice fruitcake cake sugar plum fruitcake. Gingerbread cake cheesecake. Powder carrot cake oat cake sweet roll biscuit cheesecake. Ice cream candy canes tiramisu sweet marshmallow. Toffee cookie soufflé icing pastry muffin chupa chups. Brownie pudding jujubes topping soufflé lemon drops tootsie roll. Tootsie roll fruitcake chupa chups jelly beans gummies gingerbread dragée. Lemon drops cotton candy halvah liquorice halvah biscuit. <br/><br/>Cheesecake jelly caramels jujubes. Powder topping fruitcake sweet roll cotton candy icing dessert sugar plum. Cake apple pie gummies macaroon croissant danish. Macaroon biscuit sesame snaps bear claw. Tiramisu sweet tart chocolate cake lemon drops. Ice cream tootsie roll marzipan cookie lollipop marshmallow tart pudding. Candy chupa chups dessert sugar plum marshmallow candy apple pie jujubes. Liquorice halvah danish carrot cake macaroon powder chupa chups.</p>
        </div>
        <div className="map-wrap">
          <h2>Where to find us</h2>
          <div className="contact-info">
            <p>(123) 456-7890</p>
            <p>123, Main street, This City</p>
          </div>
          <MapContainer width={'650px'} height={'450px'}/>
        </div>
      </div>
    );
  }
}

export default AboutUs;