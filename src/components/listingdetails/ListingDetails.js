import React, { Component } from "react";
import { Link, withRouter } from 'react-router-dom';

class ListingDetails extends Component {
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

  loopListing() {
    // Search through all Listing Data from homepage which is newly filtered Data
    var { listingData } = this.props;

    if (listingData == undefined || listingData.length == 0) {
      return "Sorry your filter did not match any listing";
    }

    // ShowCase Fixed amount of listing for current page (postPerPage holds this amount)
    // const indexOFLastPost = this.state.currentPage * this.state.postPerPage; //1*8=8
    // const indexOfFirstPage = indexOFLastPost - this.state.postPerPage; //8-8=0
    // const currentPost = listingData.slice(indexOfFirstPage, indexOFLastPost); //(0,8)

    return listingData.map((listing, index) => {
        return (
          <div className="col-md-3" key={index}>
            <div className="listing">
              <div
                className="listing-img"
                style={{
                  background: `url("${listing.image}")
                  no-repeat center center`,
                }}
              >
                <span className="address">{listing.address}</span>
                <div className="details">
                  <div className="col-md-3">
                    <div className="user-img"></div>
                  </div>
                  <div className="col-md-9">
                    <div className="user-details">
                      <span className="user-name">Nina Smith</span>
                      <span className="post-date">05/05/2020</span>
                    </div>
                    <div className="listing-details">
                      <div className="floor-space">
                        <i className="fa fa-square-o" aria-hidden="true"></i>
                        <span>{listing.floorSpace} ft&sup2;</span>
                      </div>
                      <div className="bedrooms">
                        <i className="fa fa-bed" aria-hidden="true"></i>
                        <span>{listing.bedrooms} bedroom</span>
                      </div>
                    </div>
                    <div className="view-btn">
                      {/* pathname: `${this.props.location.pathname.replace(/[^/]*$/, index)}` same results as below's path */}
                    <Link to={{
                      pathname: `${this.props.location.pathname.split('/').slice(0,-1).join('/') + '/' + index}`,
                      state: listing
                      }}>
                      View Listing
                    </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bottom-info">
                <span className="price">${listing.price} </span>
                <span className="location">
                  {" "}
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                  {listing.city},{listing.state}
                </span>
              </div>
            </div>
          </div>
        );
    });
  }

  render() {  
    console.log(this.state.listing);
    return (
      <section className="current__listing">
          <div className="current__listing__info">
            <div className="current__listing__image">IMAGES</div>
            <div className="current__listing__details">Details House is locating in {this.state.listing.address}</div>
          </div>
          <div className="related">
            <span className="related__amount">64 Results</span>
            <div className="related__results">{this.loopListing()}</div>
          </div>
      </section>
    );
  }
}

export default withRouter(ListingDetails);