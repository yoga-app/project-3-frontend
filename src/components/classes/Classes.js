import React, { Component } from 'react';
import './classes.css';

class Classes extends Component {
  render() {
    return (
      <div className="classes">
        <div className="rates">
          <h4>Rates</h4>
          <ul>
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
        <div className="schedule">
          <h4>Schedule</h4>
          <ul>
            <li>
              <p>Wednesdays</p>
              <p>Restorative Yoga 6:45pm-7:30pm</p>
            </li>
            <li>
              <p>Fridays</p>
              <p>Chair Yoga 9:30am-10:15am</p>
            </li>
            <li>
              <p>Sundays</p>
              <p>Power Yoga 7:00pm-7:45pm</p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Classes;