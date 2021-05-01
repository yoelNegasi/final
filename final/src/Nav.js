import React, { Component, useState } from "react";
import "./App.css";
class Nav extends Component {
  render() {
    return (
      <div>
        <h1>You can visit our social media</h1>
        <div className="social">
          <a href="https://www.youtube.com">
            <div className="youtube"></div>
          </a>
          <a href="https://www.facebook.com">
            <div className="facebook"></div>
          </a>
          <a href="https://www.twitter.com" className="twitter">
            <div className="twitter"></div>
          </a>
          <a href="https://www.instagram.com" className="instagram">
            <div className="instagram"></div>
          </a>
        </div>
      </div>
    );
  }
}

export default Nav;
