import React, { Component } from 'react';
import './hero.css';

class Hero extends Component {
  render() {
    return (
      <div className="hero">
        <section style={{position: 'absolute', top: '-60px',right: '10px'}}>
          {this.props.showMandala()}
        </section>
        <section style={{position: 'absolute', top: '280px',right: '33px'}}>
          {this.props.showMandala()}
        </section>
        <section style={{position: 'absolute', top: '90px',right: '320px'}}>
          {this.props.showMandala()}
        </section>
        {/* <small>[hero picture goes here]</small><br /> */}
        {/* <small>[call to action goes here (book a class/buy a package/subscribe)]</small><br />
        <small>[short about-us goes here]</small> */}
      </div>
    );
  }
}

export default Hero;