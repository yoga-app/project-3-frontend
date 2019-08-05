import React, { Component } from 'react';
import GalleryItem from '../gallery-item/GalleryItem';

class PrivateGallery extends Component {

  shouldComponentUpdate(nextProps, nextState){
    if(this.props.currentUser.favoritedItems.length === nextProps.currentUser.favoritedItems.length)
    {return false}
    else {return true}
  }

  showGalItems() {
    this.props.getCurrentUser()
    return this.props.currentUser.favoritedItems.map(eachI=> {
      return (
        <GalleryItem 
        key={eachI._id}
        id={eachI._id}
        link={eachI.video}
        picture={eachI.picture}
        title={eachI.title}
        text={eachI.text}
        categoryArray={eachI.category}
        updateGallery={this.props.getCurrentUser}
        theUser={this.props.currentUser}
        likedByArr={eachI.likedBy}
        />
      )
    })
  }


  render() {
    return (
      <div className="temporary">
        <small>[this is the <b>private gallery component</b>]</small>
        {this.showGalItems()}
      </div>
    );
  }
}

export default PrivateGallery;