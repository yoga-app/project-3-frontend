import React from 'react';
import {NavLink} from 'react-router-dom';
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
        <img className="kukee-img" src="/images/logo.svg" alt="logo" />
        <p className="kukee">Kukee Bliss Yoga</p>
      </div>
      <div className="nav-links">
        <NavLink to="/" className="nav-link">home</NavLink>

        {!props.theUser && 
          <span>
            <button className="nav-button" onClick = {()=> props.toggleForm('login')}>login</button>
            <button className="nav-button" onClick = {()=> props.toggleForm('signup')}>sign up</button>
          </span>
        }

        <NavLink to="/classes" className="nav-link">classes</NavLink>

        <NavLink to="/aboutus" className="nav-link">about us</NavLink>

        <NavLink to="/gallery" className="nav-link">gallery</NavLink>

        <NavLink to="/newsletter" className="nav-link">newsletter</NavLink>

        {props.theUser && 
          <span>
            <button className="nav-button" onClick = {doLogoutNowPlease}>logout</button>
          </span>
        }

        {props.theUser && 
          <NavLink to="/profile" className="nav-link profile">
            <img className="profile-pic" alt="profile" src={props.theUser.picture} />
            <div>
              {props.theUser.firstName} {props.theUser.lastName}
            </div>
          </NavLink>
        }

      </div>
    </nav>
  )

}

export default Nav;