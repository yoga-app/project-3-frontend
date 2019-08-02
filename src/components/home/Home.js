import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './home.css';
import Quote from '../quote/Quote.js';
import Hero from '../hero/Hero.js';
import Testimonial from '../testimonial/Testimonial.js';
import Slogan from '../slogan/Slogan.js';
import Waiver from '../waiver/Waiver.js';
import Liability from '../liability/Liability.js';
import axios from 'axios';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: {},
      ready: false,
    }
  }
  
  componentDidMount() {
    axios.get('http://localhost:5000/quote/randomQuote')
    .then((response)=> {
      this.setState({quote: response.data, ready: true})
    })
    .catch((err)=> {
      console.log('Something went wrong getting random quote');
    })
  }


  render() {
    return (
      <div className="home">
        <small>[this is the <b>home component</b>]</small>
        <Link to='/faq'>FAQ</Link>
        <Waiver />
        <Liability />
        <Hero />
        {this.state.ready && <Quote text={this.state.quote.text} author={this.state.quote.author}/>}
        <section className="testimonial-cards">
          <Testimonial text="blah blah blah awesome" image="/images/logo.svg" author="That Cool Guy" />
          <Testimonial text="bleh bleh bleh love it" image="/images/logo.svg" author="That Cool Chick" />
          <Testimonial text="blih blih blih amazinf" image="/images/logo.svg" author="That Cool Wolf" />
        </section>
        <Slogan />
      </div>
    );
  }
}

export default Home;