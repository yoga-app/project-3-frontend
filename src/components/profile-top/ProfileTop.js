import React, { Component } from "react";
import "./profiletop.css";
import Button from "../button/Button";

class ProfileTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false
    };
  }

  toggleEditForm(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="wrapper">
        <div className="profile-bg">
          <img src={`https://images.unsplash.com/photo-1492541641671-bd75cf01a094?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1200&h=350&fit=crop&ixid=eyJhcHBfaWQiOjF9`}
          alt="profile background"
          className="profile-bg-pic"/>
        </div>
        
       
        <section className="user-info">
          <div className="user-pic-wrapper">
            <img
              src={this.props.currentUser.picture}
              alt="user profile"
              className="user-pic-round"
            />
          </div>
          <div className="user-info-wrapper">
            <h4 className="inline">{this.props.currentUser.firstName} </h4> 
            <h4 className="inline">{this.props.currentUser.lastName}</h4>
          </div>
          <div className="edit-button-wrapper">
          <form onSubmit={this.toggleEditForm}>
          <Button text="EDIT PROFILE" class="edit-profile-button"/>
          </form>
        </div>
        </section>
      </div>
    );
  }
}

export default ProfileTop;
