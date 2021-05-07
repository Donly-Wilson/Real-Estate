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
                    <div className="favorite-btn">
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bottom-info">
                <span className="price">${listing.price} /month </span>
                <div className="rooms">
                  
                  {/* <span>{listing.bedrooms} bedroom, bags ,cars and dogs</span> */}
                  <span>{listing.bedrooms} Beds, {listing.bathrooms} Baths, {listing.floorSpace} ft&sup2;</span>
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
            {/* <Link to={this.props.match.path+'/listing/'+index}> */}
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
                <div className="details">
                  <div className="user__img">
                    <div className="user__img__icon"></div>
                  </div>
                  <div className="detail-info">
                    <div className="user-details">
                      <span className="user-name">Nina Smith</span>
                      <span className="post-date">05/05/2020</span>
                    </div>
                    <div className="favorite-btn">
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bottom-info">
                <div className="listing__details__top">
                  <div className="house__info">
                    <span className="house__info__sell-option">For Sale</span>
                    <span className="house__info__location">{listing.address}</span>
                    <span className="house__info__address">{listing.city}, {listing.state}</span>
                  </div>
                  <div className="house__info__type">Apartment</div>
                  <div className="house__info__amount-section">
                    <span className="house__info__availability">New</span>
                    <span className="house__info__price">$ {listing.price} </span>
                    <span className="house__info__original-price">$ {listing.price} </span>
                  </div>
                </div>
                <div className="listing__details__bottom">
                    <div className="floor__area">
                        <div>
                          <span className="floor__area__bed">{listing.bedrooms} <i className="fa fa-bed" aria-hidden="true"></i></span>|
                          <span className="floor__area__bath"> {listing.bathrooms} <i className="fa fa-bath" aria-hidden="true"></i></span>| 
                          <span className="floor__area__squarefoot">{listing.floorSpace} ft&sup2; <i className="fa fa fa-object-ungroup" aria-hidden="true"></i></span>
                        </div>
                    </div>   
                    <div className="house__details">
                      <span className="house__details__parking">Parking:</span>
                      <span className="house__details__parking-area">Yard</span>
                      <span className="house__details__furnished">Furnished</span>
                    </div>
                </div>
              </div>
              </Link>
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