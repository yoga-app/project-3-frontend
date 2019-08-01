import React, { Component } from 'react';
import './home.css';
import Quote from '../quote/Quote.js';
import Hero from '../hero/Hero.js';
import Testimonial from '../testimonial/Testimonial.js';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <small>this is the <b>home component</b></small>
        <Hero />
        <Quote />
        <section className="testimonial-cards">
          <Testimonial text="blah blah blah awesome" image="/images/logo.svg" author="That Cool Guy" />
          <Testimonial text="bleh bleh bleh love it" image="/images/logo.svg" author="That Cool Chick" />
          <Testimonial text="blih blih blih amazinf" image="/images/logo.svg" author="That Cool Wolf" />
        </section>
      </div>
    );
  }
}

export default Home;