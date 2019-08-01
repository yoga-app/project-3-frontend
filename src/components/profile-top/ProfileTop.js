import React, { Component } from "react";
import "./profiletop.css";
import Button from "../button/Button";
import axios from 'axios';

class ProfileTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      firstName: `${this.props.currentUser.firstName}`,
      lastName: `${this.props.currentUser.lastName}`,
      username: `${this.props.currentUser.username}`,
    };
  }

  toggleEditForm = (e) => {
    e.preventDefault();
    if(this.state.isEditing) {
      this.submitForm()
    }
    this.setState({isEditing: !this.state.isEditing})
  }

  submitForm() {
    axios.post('http://localhost:5000/api/auth/updateuserinfo/'+this.props.currentUser._id, {
      firstName:this.state.firstName,
      lastName: this.state.lastName,
      username: this.state.username,
      //handle image upload and change
    })
    .then((freshUser)=> {
      console.log(freshUser);
      this.props.getCurrentUser()
    })
    .catch((err)=> {
      console.log(err);
    })
  }

  editPic() {
    console.log('Lets go eat');
  }

  showInfo() {
    return (
    <section className="user-info">
    <div className="user-pic-wrapper">
      <img
        src={this.props.currentUser.picture}
        alt="user profile"
        className="user-pic-round"
        onClick={this.editPic}
      />
    </div>
    <div className="user-info-wrapper">
      <h4 className="inline">{this.props.currentUser.firstName} </h4> 
      <h4 className="inline">{this.props.currentUser.lastName}</h4>
      <h4>@ {this.props.currentUser.username}</h4>
    </div>
    <div className="edit-button-wrapper">
    <form onSubmit={this.toggleEditForm}>
    <Button text="EDIT PROFILE" class="edit-profile-button"/>
    </form>
  </div>
  </section>
  )
  }

  handleChange = (e) => {

    this.setState({[e.target.name] : e.target.value})
  }

  showEditFields() {
    return (
      <section className="user-info">
      <div className="user-pic-wrapper">
        <img
          src={this.props.currentUser.picture}
          alt="user profile"
          className="user-pic-round"
        />
      </div>
      <div className="user-info-wrapper">
        <input value={this.state.firstName} className="inline first-name-input" name="firstName" onChange={this.handleChange}/>
        <input value={this.state.lastName} className="inline last-name-input" name="lastName"  onChange={this.handleChange}/>
        <br />
        <input value={this.state.username} className="last-name-input" name="username"  onChange={this.handleChange}/>
      </div>
      <div className="edit-button-wrapper">
      <form onSubmit={this.toggleEditForm}>
      <Button text="SAVE CHANGES" class="edit-profile-button"/>
      </form>
    </div>
    </section>
    )
  }

  render() {
    return (
      <div className="wrapper">
        <div className="profile-bg">
          <img src={`https://images.unsplash.com/photo-1492541641671-bd75cf01a094?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1200&h=350&fit=crop&ixid=eyJhcHBfaWQiOjF9`}
          alt="profile background"
          className="profile-bg-pic"/>
        </div>
      {this.state.isEditing ? this.showEditFields() : this.showInfo()}
      </div>
    );
  }
}

export default ProfileTop;
