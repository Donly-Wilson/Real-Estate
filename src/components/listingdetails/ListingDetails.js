import React, { Component } from "react";
import { Link, withRouter} from 'react-router-dom';

class ListingDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listing:this.checkListingResult(),
      properties:this.props.listingData,
      // property:this.props.listingData[0],
      propertyIndexNumber:this.propertyID,
      sliderShift: 0
    };
  }
  
  componentDidMount () {
    // Current listing that is selected to be viewed
    this.initializeComponent();
  }

  componentWillReceiveProps(nextProps){
    //call your listing api through link and update state with new props
    this.setState({
      listing: nextProps.location.state
    });
 }


  // Use URL id number to fetch data if it can't with location state
  checkListingResult = () =>{
    const listingResult =
    (this.props.location.state && this.props.location.state.listing) != undefined
      ? this.props.location.state.listing
      : this.props.listingData[this.props.match.params.id];
      return listingResult
}

 //Function that is ran when component starts
 initializeComponent(){
  // This sets state listing to location.state
    this.state.listing = this.props.location.state;

    //This sets the slider listing to width to the variable
    const listingCardWidth = document.querySelector('.col-md-4').clientWidth;
    this.setState({ listingCardWidth });

    //On window resize update state('listingCardWidth' & 'sliderShift') to new value
    window.addEventListener('resize', function resizeScreen(){
      let newWidth = document.querySelector('.col-md-4').clientWidth;
      let newSliderShift = this.state.propertyIndexNumber * newWidth;

      this.setState({ 
        listingCardWidth:newWidth,
        sliderShift: newSliderShift
      });
    }.bind(this));
 }

  loopListing() {
    // Search through all Listing Data from homepage which is newly filtered Data
    var { listingData } = this.props;

    if (listingData == undefined || listingData.length == 0) {
      return "Sorry your filter did not match any listing";
    }

    // ShowCase Fixed amount of listing for current page (postPerPage holds this amount)
    return listingData.map((listing, index) => {
        return (
          <div className="col-md-4" key={index}>
          <div className="listing">
          {/* pathname: `${this.props.location.pathname.replace(/[^/]*$/, index)}` same results as below's path */}
            <Link to={{
              pathname: `${this.props.location.pathname.split('/').slice(0,-1).join('/') + '/' + index}`,
              state: listing
              }}>
            {/* </Link> */}
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
                    <div className="favorite-btn">
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bottom-info">
                <span className="price">${listing.price} /month </span>
                <div className="rooms">
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
    });
  }

  //Variable that contains property link url id/index
  // propertyID = parseInt(this.props.match.params.id);
  propertyID = 0;

  //Function to either add or subtract to the current id/index number and 
  switchProperty(value) {
    //Increment and Decrement propertyID based on value
    let num = (value == "previous_Property") ? --this.propertyID : ++this.propertyID;
    //Update SliderShift based on value passed
    let sliderShift = (value == "previous_Property") ? this.state.sliderShift  -= this.state.listingCardWidth: this.state.sliderShift += this.state.listingCardWidth;

      this.setState({
        // property: this.state.properties[num],
        propertyIndexNumber:num,
        sliderShift: sliderShift
      })
    }

    // componentWillUnmount() {
    //   this.initializeComponent();
    // }


  render() {  
  // const imageUrl = './img/home-details.png';
  
  return (
    <section className="current__listing">
        <div className="current__listing__info">
          <div className="current__listing__images">
            <div className="image__main" style={{
                  background: `url('../../img/home-display1.png')
          no-repeat center center`,
          backgroundSize: 'cover'
                }}></div>
            <div className="image__sub">
              <div className="image__sub__option" style={{
                  background: `url('../../img/home-display2.png')
          no-repeat center center`,
          backgroundSize: 'cover'
                }}></div>
              <div className="image__sub__option" style={{
                  background: `url('../../img/home-display3.png')
          no-repeat center center`,
          backgroundSize: 'cover'
                }}></div>
              <div className="image__sub__option" style={{
                  background: `url('../../img/home-display4.png')
          no-repeat center center`,
          backgroundSize: 'cover'
                }}></div>
            </div>
          </div>
          <div className="current__listing__details">
            <div className="details__info">
              <span className="details__info__price">$15,000 /Year</span>
              <p className="details__info__location">{this.state.listing.address}, peachfield, UK</p>
            </div>
            <div className="details__plan">
              <div className="details__plan__bedroom">Bedroom 
                <div className="details__plan__amount">
                {this.state.listing.bedrooms} <i className="fa fa-bed" aria-hidden="true"></i> 
                </div>
              </div>
              <div className="details__plan__bathroom">Bathroom 
                <div className="details__plan__amount">
                   4 <i className="fa fa-bath" aria-hidden="true"></i>
                </div>
              </div>
              <div className="details__plan__squarefoot">Area 
                <div className="details__plan__amount"> 2309ft &sup2;</div>
              </div>
            </div>
            <div className="details__description">
              <span className="details__description__title">Description</span>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus laudantium voluptas dolores magni, aliquam vitae reiciendis blanditiis quae velit, cum modi? Cum labore earum provident.</p>
            </div>
            <div className="details__nearby">
              <span className="details__nearby__title">Close Locations</span>
              <div className="details__nearby__spot">
                <span>
                <i className="fa fa-graduation-cap" aria-hidden="true"></i> School 
                </span>
                <span className="details__nearby__amount"> 0.8 miles</span>
              </div>
              <div className="details__nearby__spot">
                <span>
                  <i className="fa fa-university" aria-hidden="true"></i> State Banks
                </span>
                <span className="details__nearby__amount"> 1.5 miles</span>
              </div>
            </div>
          </div>
        </div>
        <div className="related">
          <span className="related__amount">64 Results</span>
          <button className="left-btn" value="previous_Property" onClick ={() => this.switchProperty("previous_Property")}
          disabled={this.state.propertyIndexNumber === 0}
          >➜</button>
          <button className="right-btn" value="next_Property" onClick ={() => this.switchProperty("next_Property")} 
          disabled={this.state.propertyIndexNumber === this.state.properties.length-3}
          >➜</button>
          <div className="related__results__slider">
            <div className="related__results__slider__system" style={{
              transform: `translateX(-${this.state.sliderShift}px)`
            }}>{this.loopListing()}</div>
          </div>
        </div>
    </section>
  );
}
}

export default withRouter(ListingDetails);