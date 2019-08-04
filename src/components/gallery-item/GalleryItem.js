import React, { Component } from 'react';
import './gallery-item.css';

class GalleryItem extends Component {
showCategory() {
  return this.props.categoryArray.map((eachC, index) => {
    return(
      <span key={eachC+index} className="gallery-category">{eachC} </span>
    )
  })
}

  render() {
    return (
      <div className="gallery-card" >
        <h3>{this.props.title}</h3>
        {this.props.link ? 
        
          <iframe title="video"
          //change this size for youtube embed video. Keep 16:9 ratio
          width="448" height="252" 
          src={this.props.link}
          frameBorder="0" 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen></iframe>
          
          :
          <img src={this.props.picture} alt="gallery item"/>
        }
        <p>{this.props.text}</p>
        {this.props.categoryArray && this.showCategory()}

      </div>
    );
  }
}

export default GalleryItem;