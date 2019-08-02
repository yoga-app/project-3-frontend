import React, { Component } from 'react';
import './quote.css';

class Quote extends Component {
  render() {
    return (
      <div className="temporary">
        <small>[this is the <b>connected</b> quote component]</small>
        <div>{this.props.text}</div>
        <div>{this.props.author}</div>
      </div>
    );
  }
}

export default Quote;