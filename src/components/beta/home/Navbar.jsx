import React, { Component } from "react";

import img from "./src/img/logo.png";

import "./src/css/Navbar.css";

import List from "./List";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      isHidden: true,
      hamburger: true
    };
  }
  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden,
      hamburger: !this.state.hamburger
    });
  }

  render() {
    return (
      <div className="contain">
        <div className={this.state.hamburger? "navbar":"navbar overlay navbarToggle"}>
          <div className="t-logo">
            <img src={img} alt="" />
          </div>
          <div className="t-ctos">
            <div className="toggle">
              <div className={this.state.hamburger ? "navtoggle fa fa-bars navtoggle-both" : "fa fa-bars navtoggle navtoggle-mobile"} onClick={this.toggleHidden.bind(this)}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className={this.state.isHidden ? "list_" : "list_ active"}>
              {!this.state.isHidden && <List />}
            </div>
            <div className="int-ctos">
              <ul id="tushar">
                <li>
                  <a href="">CA PORTAL</a>
                </li>
                <li>
                  <a href="">ZONALS</a>
                </li>
                <li className="dropdown">
                  <a href="">EVENTS</a>
                  <div className="dropdown-content">
                    <a href="#">ONLINE EVENTS</a>
                    <a href="#">OFFLINE EVENTS</a>
                  </div>
                </li>
                <li>
                  <a href="">TEAM CONTACT</a>
                </li>
                <li>
                  <a href="">OUR SPONSERS</a>
                </li>
                <li>
                  <a href="">FAQs</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Navbar;