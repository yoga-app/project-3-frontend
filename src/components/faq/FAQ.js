import React, { Component } from 'react';
import './faq.css';
import OneQandA from '../oneq-and-a/OneQandA';
import axios from 'axios';

class Faq extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ready: false,
      allFAQ: [],
    }
  }
  componentDidMount() {
    axios.get('http://localhost:5000/faq/getall')
    .then(response=> {
      this.setState({ready: true, allFAQ: response.data})
    })
    .catch(err=> {
      console.log(err);
    })
  }
  
  showQandA() {
    return this.state.allFAQ.map(eachFAQ=>{
      return (
        <OneQandA question={eachFAQ.question} answer={eachFAQ.answer}/>
      )
    })
  }

  render() {
    return (
      <div className="faq">
        <h1>Frequently Asked Questions</h1>
        {this.state.ready && this.showQandA()}
      </div>
    );
  }
}

export default Faq;