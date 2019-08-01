import React, { Component, Link } from 'react';
import pdf from './waiver.pdf';
import './waiver.css';

class Waiver extends Component {
  render () {
    return (
      <a href={pdf}>OPEN WAIVER</a>
      )
  }
}

export default Waiver;