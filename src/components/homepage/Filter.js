import React, { Component } from "react";

export default class Filter extends Component {
  constructor() {
    super();
    this.state = {
      name: "Donly",
    };
    this.cities = this.cities.bind(this);
    this.homeTypes = this.homeTypes.bind(this);
    this.bedrooms = this.bedrooms.bind(this);
    this.scrollAndCloseFilter = this.scrollAndCloseFilter.bind(this);
    this.resetFilter = this.resetFilter.bind(this);
  }

  componentWillMount() {
    this.props.populateAction();
    console.log(this.props);
  }

  cities() {
    if (this.props.globalState.populateFormsData.cities != undefined) {
      var { cities } = this.props.globalState.populateFormsData;
      // console.log(cities);
      return cities.map((item) => {
        return (
          <option key={item} value={item}>
            {item}
          </option>
        );
      });
    }
  }
  homeTypes() {
    if (this.props.globalState.populateFormsData.homeTypes != undefined) {
      var { homeTypes } = this.props.globalState.populateFormsData;
      // console.log(homeTypes);
      return homeTypes.map((item) => {
        return (
          <option key={item} value={item}>
            {item}
          </option>
        );
      });
    }
  }
  bedrooms() {
    if (this.props.globalState.populateFormsData.bedrooms != undefined) {
      var { bedrooms } = this.props.globalState.populateFormsData;
      // console.log(bedrooms);
      return bedrooms.map((item) => {
        return (
          <option key={item} value={item}>
            {item}+ BR
          </option>
        );
      });
    }
  }

  //This function closes filter and resets scroll position to top
  scrollAndCloseFilter(){
    let filterSection = document.querySelector('#filter');
    //prop called to close filter
    this.props.showFilter.call(this);
    //function to push element to top after closing
    filterSection.scrollTo(0,0);
    document.body.style.overflow = "auto";
  }

  //This function resets filter to default values
  resetFilter(){
    //All input and selects avalible
    const formInputs = document.querySelectorAll('select,input');

    formInputs.forEach((element) => {
      console.log(this)
      let type = element.type;
      let name = element.name;
      let tag = element.tagName.toLowerCase(); // normalize case
      // it's ok to reset the value attr of text inputs, 
      // password inputs, and textareas
      // type == 'text' is left out ignoring search the input
      if (type == 'number' || type == 'password' || tag == 'textarea'){
        element.defaultValue = element.dataset.originalValue;
        this.props.globalState[name] = element.defaultValue;

      // checkboxes and radios need to have their checked state cleared 
      // but should *not* have their 'value' changed
      }else if (type == 'checkbox' || type == 'radio'){
        element.checked = false;
        this.props.globalState[name] = element.checked

      // select elements need to have their 'selectedIndex' property set to -1
      // (this works for both single and multiple select elements)
    }else if (tag == 'select'){
      element.selectedIndex = 0;
      this.props.globalState[name] = element.value
      }
    })
      
    // Rerender or Recall filter data after all value have been reset in "globalState"
    this.props.filterData()
  }
  // bathrooms() {
  //   if (this.props.globalState.populateFormsData.bedrooms != undefined) {
  //     var { bedrooms } = this.props.globalState.populateFormsData;
  //     // console.log(bedrooms);
  //     return bedrooms.map((item) => {
  //       return (
  //         <option key={item} value={item}>
  //           {item}+ BR
  //         </option>
  //       );
  //     });
  //   }
  // }

  render() {
    return (
      <section id="filter" style={{display: this.props.globalState.showFilter ? 'block' : 'none' }}>
        <div className="inside">
          <h4>Filter</h4>
          <label htmlFor="city">City</label>
          <select
            name="city"
            className=" filters city"
            onChange={this.props.change}
          >
            <option value="All"> All</option>
            {this.cities()}
          </select>
          <label htmlFor="homeType">Home Type</label>
          <select
            name="homeType"
            className="filters homeType threeRem"
            onChange={this.props.change}
          >
            <option value="All"> All Homes</option>
            {this.homeTypes()}
          </select>
          <div className="filters bathrooms">
            <span className="title">Bathrooms</span>
            <input type="radio" id="bathroom1" value="1" name="bathrooms" onChange={this.props.change}/>
            <label htmlFor="bathroom1">1+</label>
            <input type="radio" id="bathroom2" value="2" name="bathrooms" onChange={this.props.change}/>
            <label htmlFor="bathroom2">2+</label>
            <input type="radio" id="bathroom3" value="3" name="bathrooms" onChange={this.props.change}/>
            <label htmlFor="bathroom3">3+</label>
            <input type="radio" id="bathroom4" value="4" name="bathrooms" onChange={this.props.change}/>
            <label htmlFor="bathroom4">4+</label>
            <input type="radio" id="bathroom5" value="5+" name="bathrooms" onChange={this.props.change}/>
            <label htmlFor="bathroom5">5+</label>
          </div>
          <label htmlFor="bedrooms">Bedrooms</label>
          <select
            name="bedrooms"
            className="filters bedrooms threeRem"
            onChange={this.props.change}
          >
            {this.bedrooms()}
          </select>
          <div className="filters price">
            <span className="title">Price</span>
            <input
              type="number"
              name="min_price"
              className="min-price"
              onChange={this.props.change}
              value={this.props.globalState.min_price}
              data-original-value="0"
            />
            <input
              type="number"
              name="max_price"
              className="max-price"
              onChange={this.props.change}
              value={this.props.globalState.max_price}
              data-original-value="10000000"
            />
          </div>
          <div className="filters floor-space threeRem">
            <span className="title">Floor Space</span>
            <input
              type="number"
              name="min_floor_space"
              className="min-floor-space"
              onChange={this.props.change}
              value={this.props.globalState.min_floor_space}
              data-original-value="0"
            />
            <input
              type="number"
              name="max_floor_space"
              className="max-floor-space"
              onChange={this.props.change}
              value={this.props.globalState.max_floor_space}
              data-original-value="50000"
            />
          </div>
          <div className="filters extras">
            <span className="title">Extras</span>
            <label className="extras__checkbox__label">
              Elevators
              <input
                type="checkbox"
                name="elevator"
                value="elevator"
                onChange={this.props.change}
              />
                <span className="extras__custom__checkbox">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      d="M1.73 12.91l6.37 6.37L22.79 4.59"
                    />
                  </svg>
                </span>
            </label>
            <label className="extras__checkbox__label">
              Swimming Pool
              <input
                type="checkbox"
                name="swimming_pool"
                value="swimming_pool"
                onChange={this.props.change}
              />
              <span className="extras__custom__checkbox">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      d="M1.73 12.91l6.37 6.37L22.79 4.59"
                    />
                  </svg>
                </span>
            </label>
            <label className="extras__checkbox__label">
              Finished Basement
              <input
                type="checkbox"
                name="finished_basement"
                value="finished_basement"
                onChange={this.props.change}
              />
              <span className="extras__custom__checkbox">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      d="M1.73 12.91l6.37 6.37L22.79 4.59"
                    />
                  </svg>
                </span>
            </label>
            <label className="extras__checkbox__label">
              Gym
              <input
                type="checkbox"
                name="gym"
                value="gym"
                onChange={this.props.change}
              />
              <span className="extras__custom__checkbox">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      d="M1.73 12.91l6.37 6.37L22.79 4.59"
                    />
                  </svg>
                </span>
            </label>
          </div>
          <div className="filter__footer">
            <button className="filter__footer__reset-btn" onClick={this.resetFilter}>Reset</button>
            <button className="filter__footer__done-btn" onClick={this.scrollAndCloseFilter}>Done</button>
          </div>
        </div>
      </section>
    );
  }
}
