import React, { Component } from 'react';
import './classes.css';

class Classes extends Component {
  render() {
    return (
      <div className="classes">
        {/* <small>[<b>schedule</b> and <b>rates</b> go here]</small> */}
        <ul>
          <li><h4>Prices:</h4></li>
          <li>
            <p>single class</p>
            <p>$10</p>
          </li>
          <li>
            <p>10 classes</p>
            <p>$90</p>
          </li>
          <li>
            <p>25 classes</p>
            <p>$220</p>
          </li>
          <li>
            <p>50 classes</p>
            <p>$450</p>
          </li>
        </ul>
        <p className="off">Get 20% OFF one class for every friend you bring!<br />Earn a $5 Credit after 15 visits!</p>
      </div>
    );
  }
}

export default Classes;