import React, { Component } from 'react';
import './faq.css';
import OneQandA from '../oneq-and-a/OneQandA';
import axios from 'axios';

class FAQ extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ready: false,
      allFAQ: [],
    }
  }
  componentDidMount() {
    axios.get('/faq/getall')
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
      <div className="temporary">
        <small>[this is the <b>FAQ component</b>]</small>
        {this.state.ready && this.showQandA()}
      </div>
    );
  }
}

export default FAQ;