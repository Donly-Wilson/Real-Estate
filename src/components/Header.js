import React, { Component } from "react";
import { Link } from 'react-router-dom'

export default class Header extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (

      <header>
        <Link to="/">
          <div className="logo">Más Casas</div>
        </Link>
        <nav>
          <Link to="/createads">
            Create Ads
          </Link>
          <Link to="/aboutus">
            About us
          </Link>
          <a href="#">Log In</a>
          <a href="#" className="register-btn">
            Register
          </a>
        </nav>
      </header>
    );
  }
}
