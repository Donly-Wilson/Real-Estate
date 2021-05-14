import React, { Component } from "react";
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";

export default class Header extends Component {
  constructor() {
    super();
    this.state = {};
  }
  
  render() {
    return (
      <header>
        <Navigation/>
        <MobileNavigation/>
      </header>
    );
  }
}
