import React, { Component } from 'react';
import './gallery-item.css';
import axios from 'axios';
import Button from "../button/Button";

class AddGalleryItem extends Component {
  constructor(props) {
    super(props);
    this.state ={
      title: '',
      text: '',
      picture: null,
      video: '',
      category: ''
    }
  }
  
onFormSubmit = (e) => {
  e.preventDefault();
  const config = {
    headers: {
        'content-type': 'multipart/form-data'
    }}
  const formData = new FormData();
  formData.append('picture', this.state.picture)
  formData.append('title', this.state.title)
  formData.append('video', this.state.video)
  formData.append('text', this.state.text)
  formData.append('category', this.state.category)
  axios.post('http://localhost:5000/galleryitem/create', formData, config)
  .then(response=> {
    this.props.updateGallery();
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


  render() {
    return (
      
        <div className="gallery-card" >
        <h3>Add New Gallery Item</h3>
          <form onSubmit={this.onFormSubmit}>
            <legend htmlFor="title">Enter title </legend>
            <input name="title" id="title" onChange={this.onInputChange} value={this.state.title}/>
            <div className="add-gallery-pic-or-vid">
              <p>Video or Picture. One or another, not both. If you provide a video, the picture will not be shown.</p>
              <p>If you don't provide niether picture nor video - default picture will be assigned.</p>
            <legend htmlFor="picture">Pic a pic</legend>
            <input name="picture" id="picture" type="file" onChange={this.onPicSelect} />
            <legend htmlFor="video">Enter a link to youtube video </legend>
            <input name="video" id="video" onChange={this.onInputChange} value={this.state.video}/>
            </div>
            <legend htmlFor="category">Enter the list of comma-separated categories </legend>
            <input name="category" id="category" onChange={this.onInputChange} value={this.state.category}/>
            <legend htmlFor="text">Enter description </legend>
            <input name="text" id="text" onChange={this.onInputChange} value={this.state.text}/>
            <br />
            <Button text="SAVE" className="add-gallery-item-button"/>
          </form>
      </div>
      
    );
  }
}

export default AddGalleryItem;