import React, { Component } from 'react';
import pdf from './liability.pdf';
import './liability.css';

class Liability extends Component {
  render () {
    return (
      <a href={pdf}>OPEN LIABILITY RELEASE</a>
      )
  }
}

export default Liability;