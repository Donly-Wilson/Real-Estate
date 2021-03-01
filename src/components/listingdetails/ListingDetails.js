import React, { Component } from "react";
// import {useParams} from 'react-router-dom';

export default class ListingDetails extends Component {
  constructor() {
    super();
    this.state = {
      // id:useParams()
    };
  }
  
  render() {
    // const { state } = this.props.location
    console.log(this.props.location.state);
    return (
      <div>
          House details section
      </div>
    );
  }
}