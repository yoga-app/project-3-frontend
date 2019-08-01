import React, { Component } from 'react';
import './profile.css';
import ProfileTop from '../profile-top/ProfileTop.js';
import PrivateGallery from '../private-gallery/PrivateGallery.js';

class Profile extends Component {
  render() {
    return (
      <div>
        <ProfileTop currentUser={this.props.theUser} getCurrentUser = {this.props.getCurrentUser}/>
        <PrivateGallery />
      </div>
    );
  }
}

export default Profile;