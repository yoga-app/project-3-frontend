import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import './nav.css';



function Nav(props){

  const doLogoutNowPlease = () =>{
      props.pleaseLogOut()
      .then(()=>{
          props.getUser();
      })
  }

  return(

    // nav-links:
    // home
    // about
    // prices
    // signup
    // FAQ
    // gallery
    // schedules
    // newsletter feed

    <nav>
      {props.theUser && 
        <Link to="/asanas" className="nav-link">{props.theUser.firstName} {props.theUser.lastName}</Link>
      }

      {!props.theUser && 
        <span>
          <button className="nav-button" onClick = {()=> props.toggleForm('login')}>login</button>
          <button className="nav-button" onClick = {()=> props.toggleForm('signup')}>sign up</button>
        </span>
      }

      {props.theUser && 
        <span>
          <button className="nav-button" onClick = {doLogoutNowPlease}>logout</button>
        </span>
      }

    </nav>
  )

}

export default Nav;