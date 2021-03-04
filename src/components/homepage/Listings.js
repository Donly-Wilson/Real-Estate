import React, { Component } from "react";
import Pagination from "./Pagination";
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class Listings extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: 1,
      postPerPage: 8,
      // currentView: ""
    };
    this.loopListing = this.loopListing.bind(this);
    this.paginate = this.paginate.bind(this);
  }

  paginate(pageNumber) {
    this.setState({ currentPage: pageNumber });
  }

  loopListing() {
    // Search through all Listing Data which is newly filtered Data
    var { listingData } = this.props;

    if (listingData == undefined || listingData.length == 0) {
      return "Sorry your filter did not match any listing";
    }

    // ShowCase Fixed amount of listing for current page (postPerPage holds this amount)
    const indexOFLastPost = this.state.currentPage * this.state.postPerPage; //1*8=8
    const indexOfFirstPage = indexOFLastPost - this.state.postPerPage; //8-8=0
    const currentPost = listingData.slice(indexOfFirstPage, indexOFLastPost); //(0,8)

    return currentPost.map((listing, index) => {
      if (this.props.globalState.view == "box") {
        //THIS IS THE BOX VIEW
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
                    <Link to={{
                      pathname: `/listing/${index}`,
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
      } else {
        //THIS IS THE LONG VIEW
        return (
          <div className="col-md-12 col-lg-6" key={index}>
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
                    <Link to={`/listing/${index}`}>
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
      }
    });
  }

  render() {
    return (
      <section id="listings">
        <section className="search-area">
          <input type="text" name="search" onChange={this.props.change} />
        </section>
        <section className="sortby-area">
          <div className="results">
            {this.props.globalState.filteredData.length} results found
          </div>
          <div className="sort-options">
            <select
              name="sortby"
              className="sortby"
              onChange={this.props.change}
            >
              <option value="price-dsc"> Lowest Price</option>
              <option value="price-asc"> Highest Price</option>
            </select>
            <div className="view">
              <i
                className="fa fa-th-list"
                aria-hidden="true"
                onClick={this.props.changeView.bind(null, "long")}
              ></i>
              <i
                className="fa fa-th"
                aria-hidden="true"
                onClick={this.props.changeView.bind(null, "box")}
              ></i>
            </div>
          </div>
        </section>
        <div className="raw">
          <section className="listings-results">{this.loopListing()}</section>
        </div>
        <Pagination
          postPerPage={this.state.postPerPage}
          totalPost={this.props.listingData.length}
          paginate={this.paginate}
        />
      </section>
    );
  }
}

export default withRouter(Listings);