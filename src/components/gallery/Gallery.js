import React, { Component } from 'react';
import './gallery.css';
import GalleryItem from '../gallery-item/GalleryItem';
import axios from 'axios';


class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ready: false,
      allGalItems: [],
    }
  }
  
  componentDidMount() {
    axios.get('http://localhost:5000/galleryitem/getall')
    .then(allGalItems=> {
      this.setState({allGalItems: allGalItems.data, ready: true})
    })
  }

  showGalItems() {
    return this.state.allGalItems.map(eachI=> {
      return (
        <GalleryItem 
        key={eachI._id}
        link={eachI.video}
        picture={eachI.picture}
        title={eachI.title}
        text={eachI.text}
        categoryArray={eachI.category}
        />
      )
    })
  }

  render() {
 
 
    return (
      <div className="temporary">
        {this.state.ready ? this.showGalItems() : <div>Loading ... </div>}
      
      </div>
    );

   
  }
}

export default Gallery;