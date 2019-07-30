import React, { Component } from 'react';
import axios from 'axios';
import Asana from '../asana/Asana';

<<<<<<< HEAD:src/components/main/Main.js
class Main extends Component {
=======

class Index extends Component {
>>>>>>> 9954f4a892af31a24dd9b3466e90b9b6410df2a5:src/components/index/Index.js
  constructor(props) {
    super(props);
    this.state = {
      allAsanas: [],
      ready: false,
    }

  }

  componentDidMount() {
    axios.get('http://localhost:5000/asanas')
    .then((response)=> {
      this.setState({allAsanas: response.data, ready: true})
    })
    .catch(err=> {
      console.log(err);
    })
  }
  
  render() {
    return (
      <div>
        
        <Asana ready={this.state.ready} asanaList={this.state.allAsanas}/>
      </div>
    );
  }
}

export default Main;