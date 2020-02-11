import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <div className="fixed-navbar-up">
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <div
                className="nav-link"
                style={{ marginLeft:"600px" }}
                href="#"
              >
                NEWS FEED
              </div>
            </li>
          </ul>
        </div>
      </nav>
      </div>
    );
  }
}
