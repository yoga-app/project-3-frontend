import React, { Component } from 'react';
import './testimonial.css';

class Testimonial extends Component {
  render() {
    return (
      <div className="temporary">
        <small>[this is the <b>testimonial component</b>]</small><br />
        <small>[it renders the image, text and author as a prop]</small>
        <hr />
        <img className="testimonial-picture" src={this.props.image} alt="yogi" />
        <p>{this.props.text}</p>
        <small>by {this.props.author}</small>
      </div>
    );
  }
}

export default Testimonial;