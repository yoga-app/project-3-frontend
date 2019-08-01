import React, { Component } from 'react';

class Hero extends Component {
  render() {
    return (
      <div className="temporary">
        <small>[this is the <b>hero component</b>]</small><br />
        <small>[hero picture goes here]</small><br />
        <small>[call to action goes here (book a class/buy a package/subscribe)]</small><br />
        <small>[short about-us goes here]</small>
      </div>
    );
  }
}

export default Hero;