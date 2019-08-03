import React, { Component } from 'react';
import './testimonial.css';

class Testimonial extends Component {
  render() {
    return (
      <div className="temporary">
        <small>[this is the <b>connected</b> testimonial component]</small><br />
        <small>[it renders the picture, text, attended, rating and author as a prop]</small>
        <hr />
        <p>Class: {this.props.attended}</p>
        <p>{this.props.rating}</p>
        <img className="testimonial-picture" src={this.props.picture} alt="yogi" />
        <p>{this.props.text}</p>
        <small>by {this.props.author}</small>
      </div>
    );
  }
}

export default Testimonial;