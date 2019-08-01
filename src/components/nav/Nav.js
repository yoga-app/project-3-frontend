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
        <img className="kukee-img" src="/images/logo.svg" />
        <p className="kukee">Kukee Bliss Yoga</p>
      </div>
      <div className="nav-links">
        <Link to="/" className="nav-link">home</Link>

        {!props.theUser && 
          <span>
            <button className="nav-button" onClick = {()=> props.toggleForm('login')}>login</button>
            <button className="nav-button" onClick = {()=> props.toggleForm('signup')}>sign up</button>
          </span>
        }

        <Link to="/rates" className="nav-link">rates</Link>

        <Link to="/aboutus" className="nav-link">about us</Link>

        {props.theUser && 
          <span>
            <button className="nav-button" onClick = {doLogoutNowPlease}>logout</button>
          </span>
        }

        {props.theUser && 
          <Link to="/profile" className="nav-link profile">
            <img className="profile-pic" src={props.theUser.picture} />
            <div>
              {props.theUser.firstName} {props.theUser.lastName}
            </div>
          </Link>
        }

      </div>
    </nav>
  )

}

export default Nav;