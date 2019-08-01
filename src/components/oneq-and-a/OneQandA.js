import React, { Component } from 'react';

class OneQandA extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.question}</h3>
        <p>{this.props.answer}</p>
      </div>
    );
  }
}

export default OneQandA;