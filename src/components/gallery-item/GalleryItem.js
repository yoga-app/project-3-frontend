import React, { Component } from 'react';
import './gallery-item.css';
import axios from 'axios';
import Button from "../button/Button";

class GalleryItem extends Component {
  constructor(props) {
    super(props);
   
    this.state ={
      title: '',
      text: '',
      picture: null,
      video: '',
      category: '',
      isEditing: false,
      refresh: false,
      liked: false,
    }
  }

    
submitEditForm = (e) => {
  e.preventDefault();
  const config = {
    headers: {
        'content-type': 'multipart/form-data'
    }}
  const formData = new FormData();
  this.state.picture && formData.append('picture', this.state.picture)
  this.state.title && formData.append('title', this.state.title)
  this.state.video && formData.append('video', this.state.video)
  this.state.text && formData.append('text', this.state.text)
  this.state.category && formData.append('category', this.state.category)
  axios.post('http://localhost:5000/galleryitem/updatebyid/'+this.props.id, formData, config)
  .then(response=> {
    this.props.updateGallery();
    this.setState({refresh: !this.state.refresh, isEditing: false})
    console.log(response);
  })
  .catch(err=> {
    console.log(err);
  })
}

onInputChange = (e) => {
  this.setState({[e.target.name]:e.target.value})
}

onPicSelect = (e) => {
  this.setState({picture:e.target.files[0]})
}

toggleEditForm = (e) => {
  e.preventDefault();
  if(this.state.isEditing) {
    this.submitEditForm()
  }
  this.setState({isEditing: !this.state.isEditing})
}

cancel = ()=> {
  this.setState({isEditing: false});
}

showEditFields() {
return (
  <div className="gallery-card" >
  <form onSubmit={this.submitEditForm}>
    <legend htmlFor="title">New title</legend>
    <input name="title" id="title" onChange={this.onInputChange} value={this.state.title} />
    <legend htmlFor="text">New description</legend>
    <input name="text" id="text" onChange={this.onInputChange} value={this.state.text} />
    <legend htmlFor="picture">Select new picture</legend>
    <input name="picture" id="picture" type="file" onChange={this.onPicSelect} />
    <legend htmlFor="video">Link to  new youtube video</legend>
    <input name="video" id="video" onChange={this.onInputChange} value={this.state.video} />
    <legend htmlFor="title">New categories</legend>
    <input name="category" onChange={this.onInputChange} value={this.state.category} />
    <button>Update </button>
  </form>
    <button className="cancel-update-gallery" onClick={this.cancel}>Cancel Editing</button>
  </div>
)
}

componentDidMount ()  {
  if(this.props.theUser && this.props.likedByArr.includes(this.props.theUser._id))
  {
    this.setState({liked: true})
  }
}

addLike = () => {
  axios.post('http://localhost:5000/galleryitem/likebyid/'+this.props.id, {
    direction: 'add',
    userID: this.props.theUser._id 
  })
  .then((response)=> {
    console.log(response);
    this.setState({liked: true})
  })
  .catch(err=> {
    console.log(err);
  })

  axios.post('http://localhost:5000/api/auth/updatefavorited/'+this.props.theUser._id, {
    direction: 'add',
    itemID: this.props.id
  })
  .then(response => {
    console.log(response);
  })
  .catch(err=> {
    console.log(err);
  })
}

removeLike = () => {
  axios.post('http://localhost:5000/galleryitem/likebyid/'+this.props.id, {
    direction: 'remove',
    userID: this.props.theUser._id 
  })
  .then((response)=> {
    console.log(response);
    this.setState({liked: false})
  })
  .catch(err=> {
    console.log(err);
  })

  axios.post('http://localhost:5000/api/auth/updatefavorited/'+this.props.theUser._id, {
    direction: 'remove',
    itemID: this.props.id
  })
  .then(response => {
    console.log(response);
  })
  .catch(err=> {
    console.log(err);
  })
}

showInfo() {
  return (<div className="gallery-card" >
  <h3>{this.props.title}</h3>
  
  {this.props.theUser && (this.state.liked ? 
  <div> 
    <p>Liked!</p>
  <button onClick={this.removeLike}>Remove like</button>
  </div>
    :
    <div> 
    <button onClick={this.addLike}>Like it!</button>
    </div>)
  }

  {this.props.link ? 
  
    <iframe title="video"
    //change this size for youtube embed video. Keep 16:9 ratio
    width="448" height="252" 
    src={this.props.link}
    frameBorder="0" 
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
    allowFullScreen></iframe>
    
    :
    <img src={this.props.picture} className="gallery-image" alt="gallery item"/>
  }
  <p>{this.props.text}</p>

  {this.props.theUser && this.props.theUser.isAdmin && 
  <form onSubmit={this.deleteGalItem}>
  <Button text="Delete this item"
  class="delete-gallery-item-button" 
  />
  </form>}
  {this.props.theUser && this.props.theUser.isAdmin && 
  <form onSubmit={this.toggleEditForm}>
    <Button text="Edit this item" class="edit-gallery-item-button"/>
    </form>}
  {this.props.categoryArray && this.showCategory()}

</div>
  )
}


showCategory() {
  return this.props.categoryArray.map((eachC, index) => {
    return(
      <span key={eachC+index} className="gallery-category">{eachC} </span>
    )
  })
}


deleteGalItem = (e) =>{
  e.preventDefault();
  axios.post('http://localhost:5000/galleryitem/deletebyid/'+this.props.id)
  .then(()=> {
    this.props.updateGallery()
  })
  .catch(err=> {
    console.log(err);
  })
}

  render() {
    return (
      <div>
        {this.state.isEditing ? this.showEditFields() : this.showInfo()}
      </div>
    );
  }
}

export default GalleryItem;