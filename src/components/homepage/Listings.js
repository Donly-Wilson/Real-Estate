import React, { Component } from "react";
import Pagination from "./Pagination";
import { Link, withRouter } from 'react-router-dom';

class Listings extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: 1,
      postPerPage: 8,
    };
    this.loopListing = this.loopListing.bind(this);
    this.paginate = this.paginate.bind(this);
  }

  paginate(pageNumber) {
    this.setState({ currentPage: pageNumber });
  }

  loopListing() {
    // Search through all Listing Data from homepage which is newly filtered Data
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
          <div className="col-md-4" key={index}>
            <div className="listing">
            <Link to={{
                      pathname: `${this.props.match.url}/listing/${index}`,
                      state: listing
                      }}>
              <div
                className="listing-img"
                style={{
                  background: `url("${listing.image}")
                  no-repeat center center`,
                  backgroundSize: 'cover'
                }}
              >
                <span className="furnished">Furnished</span>
                <div className="details">
                  <div className="user__img">
                    <div className="user__img__icon"></div>
                  </div>
                  <div className="detail-info">
                    <div className="user-details">
                      <span className="user-name">Nina Smith</span>
                      <span className="post-date">05/05/2020</span>
                    </div>
                    {/* <div className="listing-details">
                      <div className="floor-space">
                        <i className="fa fa-square-o" aria-hidden="true"></i>
                        <span>{listing.floorSpace} ft&sup2;</span>
                      </div>
                      
                    </div> */}
                    <div className="view-btn">
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bottom-info">
                <span className="price">${listing.price} /month </span>
                <div className="rooms">
                  
                  {/* <span>{listing.bedrooms} bedroom, bags ,cars and dogs</span> */}
                  <span>{listing.bedrooms} Beds, 2 Baths, {listing.floorSpace} ft&sup2;</span>
                </div>
                <span className="location">
                  {" "}
                  {listing.address}, {listing.city}, {listing.state}
                </span>
              </div>
              </Link>
            </div>
          </div>
        );
      } else {
        //THIS IS THE LONG VIEW
        return (
          <div className="col-md-12 col-lg-12" key={index}>
            <div className="listing" id="listing__long__view">
              <div
                className="listing-img"
                style={{
                  background: `url("${listing.image}")
          no-repeat center center`,
          backgroundSize: 'cover'
                }}
              >
                <div className="details">
                  <div className="col-md-3">
                    <div className="user__img__icon"></div>
                  </div>
                  <div className="col-md-9">
                    <div className="user-details">
                      <span className="user-name">Nina Smith</span>
                      <span className="post-date">05/05/2020</span>
                    </div>
                    <div className="view-btn">
                    <Link to={this.props.match.path+'/listing/'+index}>
                      View Listing
                    </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bottom-info">
                <div className="listing__details__top">
                  <div>
                    <span>For Sale</span>
                    <span className="location">
                        {" "}
                        <span className="address">{listing.address}</span>
                        <br/>
                        {listing.city},{listing.state}
                    </span>
                  </div>
                  <div>Apartment</div>
                  <div>
                    <span className="price">${listing.price} </span>
                    <span className="original__price">${listing.price} </span>
                  </div>
                </div>
                <hr/>
                <div className="listing__details__bottom">
                    <div className="floor-space">
                        <span>{listing.bedrooms} Beds | 2 Baths | {listing.floorSpace} ft&sup2;</span>
                        <i className="fa fa-square-o" aria-hidden="true"></i>
                        <span>{listing.floorSpace} ft&sup2;</span>
                    </div>   
                    <div className="user-details">
                      <span className="user-name">Nina Smith</span>
                      <span className="post-date">05/05/2020</span>
                      <span className="post-date">Furnished</span>
                    </div>
                </div>
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
        <div className="row">
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