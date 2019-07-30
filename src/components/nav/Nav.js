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
      <div className="logo">
        <p>temp-logo</p>
      </div>
      <div className="nav-links">
        <Link to="/" className="nav-link">home</Link>

        {!props.theUser && 
          <span>
            <button className="nav-button" onClick = {()=> props.toggleForm('login')}>login</button>
            <button className="nav-button" onClick = {()=> props.toggleForm('signup')}>sign up</button>
          </span>
        }

        <Link to="/aboutus" className="nav-link">about us</Link>
        {props.theUser && 
          <Link to="/asanas" className="nav-link">{props.theUser.username}</Link>
          // <Link to="/asanas" className="nav-link">{props.theUser.firstName} {props.theUser.lastName}</Link>
        }
        {props.theUser && 
          <span>
            <button className="nav-button" onClick = {doLogoutNowPlease}>logout</button>
          </span>
        }
      </div>
    </nav>
  )

}

export default Nav;