import React, { Component } from 'react';
import axios from 'axios';

class AddFaq extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      answer: '',
    }
  }
  
  onInputChange = (e) => {
    this.setState({[e.target.name]:e.target.value})
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    
    axios.post('http://localhost:5000/faq/create', this.state)
    .then(response=> {
      this.setState({question: '', answer: ''})
      this.props.update();
    })
    .catch(err=> {
      console.log(err);
    })
  }

  render() {
    return (
      <div className="add-faq-wrapper">
        <h3>Add new FAQ</h3>
        <form className="add-faq-form" onSubmit={this.onFormSubmit}>
          <legend htmlFor="question">Add a question </legend>
          <input name="question" id="question" onChange={this.onInputChange} value={this.state.question} />
          <legend htmlFor="answer">Add a answer </legend>
          <input name="answer" id="answer" onChange={this.onInputChange} value={this.state.answer} />
          <button>Save </button>
        </form>
      </div>
    );
  }
}

export default AddFaq;