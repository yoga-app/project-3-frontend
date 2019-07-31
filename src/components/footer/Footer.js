import React, { Component } from "react";
import "./footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-left">
          <p> Mission statement.</p>
          <p>Why do I do what I do. </p>
          <p>What is in it for you</p> 
        </div>
        <div className="footer-middle">
          <ul>
            <li>Oat cake powder bear claw wafer apple pie brownie</li>
            <li>Toffee dessert wafer marshmallow brownie cheesecake.</li>
            <li>Candy sugar plum chocolate bar dessert</li>
          </ul>
        </div>
        <div className="footer-right">
          Connect with us by clicking on this handy social icons
        </div>
      </div>
    );
  }
}

export default Footer;
