import React, { Component } from 'react';
import './classes.css';
import axios from 'axios';

class Classes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: '',
      showUndoBtn: false,
    }
  }
  

  addClassPackage(classesLeft, type) {
    axios.post('http://localhost:5000/api/auth/updateuserpackage/'+this.props.theUser._id, {
      status: 'pending',
      type: type, 
      classesLeft: classesLeft,
    })
    .then(response=> {
      this.setState({result: response.data.message, showUndoBtn: true}) ;
    })
    .catch(err=> {
      console.log(err);
    })
  }

  handleUndo = () => {
    axios.post('http://localhost:5000/api/auth/updateuserpackage/'+this.props.theUser._id, {
      status: '',
      type: '', 
      classesLeft: '',
    })
    .then(response=> {
      this.setState({result: 'Package cancelled', showUndoBtn: false}) ;
    })
    .catch(err=> {
      console.log(err);
    })
  }

 

  render() {
    return (
      <div className="classes">
        <div className="rates">
          <h4>Rates</h4>
          {this.state.result && <p>{this.state.result}</p> }
          {this.state.showUndoBtn && <button onClick={this.handleUndo}>Undo</button>}
          <ul>
            <li>
              <p>single class</p>
              <p>$10</p>
            </li>
            <li>
              <p>10 classes</p>
              <p>$90</p>
              {this.props.theUser && <button onClick={()=> {this.addClassPackage(10, 'beginner')}}>I want this!</button>}
            </li>
            <li>
              <p>25 classes</p>
              <p>$220</p>
              {this.props.theUser && <button onClick={()=>{this.addClassPackage(25, 'medium')}}>I want this!</button>}
            </li>
            <li>
              <p>50 classes</p>
              <p>$450</p>
              {this.props.theUser && <button onClick={()=>{this.addClassPackage(50, 'advanced')}}>I want this!</button>}
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