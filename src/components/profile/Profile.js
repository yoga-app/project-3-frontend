import React, { Component } from 'react';
import './profile.css';
import ProfileTop from '../profile-top/ProfileTop.js';
import PrivateGallery from '../private-gallery/PrivateGallery.js';
import ProgressTracker from '../progress-tracker/ProgressTracker.js';
import Subscription from '../subscription/Subscription.js';
import Docs from '../docs/Docs.js';

class Profile extends Component {
  render() {
    return (
      <div>
        <ProfileTop currentUser={this.props.theUser} getCurrentUser = {this.props.getCurrentUser}/>
        <PrivateGallery />
        <ProgressTracker />
        <Subscription />
        <Docs />
      </div>
    );
  }
}

export default Profile;