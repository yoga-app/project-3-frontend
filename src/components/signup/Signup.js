import React, { Component } from 'react';
import AuthService from '../../services/AuthServices.js';
import './signup.css';
import Button from '../button/Button.js'

class Signup extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstNameInput: '',
      lastNameInput: '',
      usernameInput: '',
      passwordInput: ''
    };
    this.service = new AuthService();
  }

  handleChange = (e) =>{
      this.setState({[e.target.name]: e.target.value})
  }

  tryToSignUp = (e) =>{
      e.preventDefault();
      const uName = this.state.usernameInput;
      const pWord = this.state.passwordInput;

    this.service.signup(uName, pWord)
    .then(()=>{
        this.props.toggleForm('signup');
        this.props.getUser();
    })
  }

  render(){
    return(
      <form className="form" onSubmit = {this.tryToSignUp}>
        <div>
          <label>first name:</label>
          <input value={this.state.firstNameInput}
            name="firstName"
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label>last name:</label>
          <input value={this.state.lastNameInput}
            name="lastName"
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label>e-mail:</label>
          <input value={this.state.usernameInput}
            name="usernameInput"
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label>password:</label>
          <input value={this.state.passwordInput} 
            name="passwordInput"
            onChange={this.handleChange}
          />
        </div>
        <Button text="SIGNUP" />
      </form>
    )
  }
}

export default Signup; 