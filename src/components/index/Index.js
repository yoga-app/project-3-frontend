import React, { Component } from 'react';
import axios from 'axios';
import Asana from '../asana/Asana';


class Index extends Component {
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

export default Index;