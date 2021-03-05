import React, { Component } from "react";
// import {useParams} from 'react-router-dom';

export default class ListingDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listing: this.props.location.state
    };
  }
  componentDidMount () {
    // Current listing that is selected to be viewed
    // const listing = this.props.location.state;
    // console.log(this.props.location.state);
  }
  render() {  
    // console.log(this.state.listing.address);
    return (
      <div>
          <div>IMAGES</div>
          <div>Details
            House is locating in {this.state.listing.address}
          </div>
          <div>Results</div>
      </div>
    );
  }
}