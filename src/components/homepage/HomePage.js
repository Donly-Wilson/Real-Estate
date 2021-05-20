// (./homes) hyperlink or page

import React, { Component } from "react";
// import ReactDOM from "react-dom";
// import Header from "./Header";
import Filter from "./Filter";
import Listings from "./Listings";
import listingData from "./data/listingData";
import {Route, Switch, withRouter } from 'react-router-dom';
import ListingDetails from "../listingdetails/ListingDetails";
// import { FALSE } from "node-sass";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Donly",
      listingData,
      city: "All",
      homeType: "All",
      bedrooms: "0",
      bathrooms: "0",
      min_price: 0,
      max_price: 10000000,
      min_floor_space: 0,
      max_floor_space: 50000,
      elevator: false,
      finished_basement: false,
      gym: false,
      swimming_pool: false,
      filteredData: listingData,
      populateFormsData: "",
      sortby: "price-dsc",
      view: "box",
      search: "",
      showFilter: window.innerWidth > 991 ? true : this.generateFilter(),
    };
    this.change = this.change.bind(this);
    this.filteredData = this.filteredData.bind(this);
    this.populateForms = this.populateForms.bind(this);
    this.changeView = this.changeView.bind(this);
    this.toggleShowFilter = this.toggleShowFilter.bind(this);
  }

  componentWillMount() {
    // This organise/sorts data by price filter btn
    var listingData = this.state.listingData.sort((a, b) => {
      a.price - b.price;
    });

    this.setState({
      listingData,
    });

    // this.generateFilter();
  }
  generateFilter(){
    let windowWidth = window.innerWidth;
    console.log(windowWidth);
    
    //Checks to see if windows is desktop or tablet and display filter accordingly
    window.addEventListener('resize', function resizeScreen(){
    windowWidth = window.innerWidth;
    console.log(windowWidth);
    if(windowWidth < 991){
      this.setState({ 
        showFilter: false,
      });
    }else if (windowWidth > 991){
      this.setState({ 
        showFilter: true,
      });
    }
  }.bind(this));
}

  change(event) {
    var name = event.target.name;
    var value =
      event.target.type === "checkbox" 
        ? event.target.checked 
        : event.target.value;
    this.setState(
      {
        [name]: value,
      },
      () => {
        this.filteredData();
        console.log(this.state);
      }
    );
    console.log(event.target.name);
  }
  changeView(viewName) {
    this.setState({
      view: viewName,
    });
  }

  filteredData() {
    var newData = this.state.listingData.filter((item) => {
      return (
        item.price >= this.state.min_price &&
        item.price <= this.state.max_price &&
        item.floorSpace >= this.state.min_floor_space &&
        item.floorSpace <= this.state.max_floor_space &&
        item.bedrooms >= this.state.bedrooms &&
        item.bathrooms >= this.state.bathrooms
      );
    });
    console.log(newData);
    if (this.state.city != "All") {
      // console.log(newData);
      console.log(this.state);
      newData = newData.filter((item) => {
        return item.city == this.state.city;
      });
    }

    if (this.state.homeType != "All") {
      newData = newData.filter((item) => {
        return item.homeType == this.state.homeType;
      });
    }

    if (this.state.sortby == "price-dsc") {
      newData = newData.sort((a, b) => {
        return a.price - b.price;
      });
    }

    if (this.state.sortby == "price-asc") {
      newData = newData.sort((a, b) => {
        return b.price - a.price;
      });
    }

    if (this.state.search != "") {
      newData = newData.filter((item) => {
        var city = item.city.toLowerCase();
        var searchText = this.state.search.toLowerCase();
        var currentlySearching = city.match(searchText);

        if (currentlySearching != null) {
          return true;
        }
      });
    }

    // if elevator is true then i will return all the listing with elevators with in thier extras
    if (this.state.elevator == true) {
      newData = newData.filter((item) => {
        return item.extra.includes("elevator");
      });
    }

    if (this.state.gym == true) {
      newData = newData.filter((item) => {
        return item.extra.includes("gym");
      });
    }

    if (this.state.swimming_pool == true) {
      newData = newData.filter((item) => {
        return item.extra.includes("swimming_pool");
      });
    }

    if (this.state.finished_basement == true) {
      newData = newData.filter((item) => {
        return item.extra.includes("finished_basement");
      });
    }
    this.setState({ filteredData: newData });
  }

  populateForms() {
    // city
    var cities = this.state.listingData.map((item) => {
      return item.city;
    });
    cities = new Set(cities);
    cities = [...cities];
    cities = cities.sort();

    // homeType
    var homeTypes = this.state.listingData.map((item) => {
      return item.homeType;
    });
    homeTypes = new Set(homeTypes);
    homeTypes = [...homeTypes];
    homeTypes = homeTypes.sort();

    // bedrooms
    var bedrooms = this.state.listingData.map((item) => {
      return item.bedrooms;
    });
    bedrooms = new Set(bedrooms);
    bedrooms = [...bedrooms];
    bedrooms = bedrooms.sort();
    
    // bathrooms
    var bathrooms = this.state.listingData.map((item) => {
      return item.bathrooms;
    });
    bathrooms = new Set(bathrooms);
    bathrooms = [...bathrooms];
    bathrooms = bathrooms.sort();

    this.setState(
      {
        populateFormsData: {
          cities,
          homeTypes,
          bedrooms,
          bathrooms,
        },
      }
      // () => console.log(this.state)
    );
  }

  //Function to toggle 'showFilter' state to 'true' or 'false'
  toggleShowFilter(){
    this.setState((prevState)=>{
      return {showFilter: !prevState.showFilter};
  })
}

  render() {
    const {match} = this.props;
        // console.log(match);
    return (
      <div>
        {" "}
        <section id="content-area">
          {<Filter
            change={this.change}
            globalState={this.state}
            populateAction={this.populateForms}
            showFilter={this.toggleShowFilter} 
            />}
          <Switch>
            <Route path={ match.url} exact={true}>
              <Listings
                globalState={this.state}
                listingData={this.state.filteredData}
                change={this.change}
                changeView={this.changeView}
                showFilter={this.toggleShowFilter} 
              />
            </Route>

            <Route path={`${match.url}/listing/:id`} exact={true}
            //This will remount the entire page instead of updating info(not recommended)
            render={props => <ListingDetails {...props} 
            listingData={this.state.filteredData}/>}
            >
              {/* <ListingDetails
              listingData={this.state.filteredData}
              /> */}
            </Route>

          </Switch>
        </section>
      </div>
    );
  }
}

export default withRouter(HomePage);
// const app = document.getElementById("app");
// ReactDOM.render(<App />, app);
