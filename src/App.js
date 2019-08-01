import React from 'react';
import './App.css';
import {Route, Link, Switch, Redirect} from 'react-router-dom';
import Main from './components/main/Main';
import Asana from './components/asana/Asana.js';
import Signup from './components/signup/Signup.js';
import Login from './components/login/Login.js';

import Profile from './components/profile/Profile.js';

import AuthService from './services/AuthServices.js';
import Nav from './components/nav/Nav.js';
import Footer from './components/footer/Footer';
import axios from 'axios';
import AboutUs from './components/about-us/AboutUs';
import Rates from './components/rates/Rates.js';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      currentlyLoggedIn: null,
      asanas: [],
      ready: false,
      signupShowing: false,
      loginShowing: false,
   };

   this.service = new AuthService();
  }

  getAllAsanas = () => {
    axios.get(`http://localhost:5000/asanas`, {withCredentials: true})
    .then(response => {
      console.log(response)
      this.setState({
        asanas: response.data,
        ready: true,
      })
    })
  }


  getCurrentlyLoggedInUser = () =>{
    this.service.currentUser()
    .then((theUser)=>{
      this.setState({currentlyLoggedIn: theUser})
      console.log(this.state.currentlyLoggedIn)
    })
    .catch(()=>{
      this.setState({currentlyLoggedIn: null})
    })
  }


  toggleForm = (thisForm) =>{
    let theForm;
    let theOther;
    if(thisForm === "signup"){
      theForm = 'signupShowing'
      theOther = 'loginShowing'
    } else {
      theForm = 'loginShowing'
      theOther = 'signupShowing'
    }
    this.setState({[theForm]: !this.state[theForm], [theOther]: false })
    
  }



  componentDidMount() {
    this.getAllAsanas();
    this.getCurrentlyLoggedInUser();
  }


  render(){
  // console.log('---------------',this.state);

    return (
      <div className="app">

        <Nav
          theUser = {this.state.currentlyLoggedIn} 
          pleaseLogOut = {()=> this.service.logout()}
          toggleForm = {this.toggleForm}
          getUser = {this.getCurrentlyLoggedInUser}
        />

        {this.state.signupShowing && 
          <Signup
            getUser = {this.getCurrentlyLoggedInUser}
            toggleForm = {this.toggleForm}
          />
        }

        {this.state.loginShowing && 
          <Login
            getUser = {this.getCurrentlyLoggedInUser}
            toggleForm = {this.toggleForm}
          />
        }

        <Switch>
          {/* just to test:  */}

          <Route exact path="/asanas" render ={(props)=>
            <Asana
              {...props} 
              theUser = {this.state.currentlyLoggedIn} 
              getData = {this.state.asanas}
              ready = {this.state.ready}
            />}
          />

          <Route exact path="/profile" render ={(props)=> 
            this.state.currentlyLoggedIn ? 
            <Profile
              {...props} 
              theUser = {this.state.currentlyLoggedIn}
              getCurrentUser = {this.getCurrentlyLoggedInUser}
            /> 
          :
          <Redirect to="/" />}
          />

          {/* <Route exact path="/asanas/:theID" render ={(props)=>
            <ProjectDetails
              {...props} 
              ready = {this.state.ready}
              getData = {this.state.asanas}
              theUser = {this.state.currentlyLoggedIn}
            />}
          /> */}

          {/* end test -------------------------------- */}

          <Route exact path="/aboutus" component={AboutUs}/>
          <Route exact path="/" component={Main}/>
          <Route exact path="/rates" component={Rates}/>

        </Switch>
        {/* <Main /> */}
        <Footer />
      </div>
    );
  }
}
export default App;