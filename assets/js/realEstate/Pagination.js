import React, { Component, Fragment } from "react";
import update from "immutability-helper";

export default class Pagination extends Component {
  constructor() {
    super();
    this.state = {
      pageNumbers: [],
    };
  }

  calcPagination = () => {
    // Calculate correct amt of pagination number
    let newArray = []; //Array that holds numberes beinga pushed

    for (
      let i = 1;
      i <= Math.ceil(this.props.totalPost / this.props.postPerPage);
      i++
    ) {
      //pushes each index into array outside of loop
      newArray.push(i);
    }

    // Variable that pushes new array into pageNumbers using immutability
    const newState = update(this.state.pageNumbers, {
      // $push: newArray, //Push workes here as well but creates a but when reRendering...doesnt reSet the entire array, just  adds
      $set: newArray,
    });

    //Sets the new state for "pageNumbers" by passing the variable instructs pushing numbers
    this.setState({ pageNumbers: newState });
  };

  //Loads entire pagination based on full listing data
  componentDidMount() {
    this.calcPagination();
  }

  //Rerenders pagination based on currently filtered data
  componentDidUpdate(prevProps) {
    if (this.props.totalPost !== prevProps.totalPost) {
      this.calcPagination();
    }
  }

  render() {
    console.log(this.props.totalPost);
    return (
      <section id="pagination">
        <div className="raw">
          <ul className="pagination-nums">
            <li>Prev</li>
            {/* Loop through each index and output it with a list tag */}
            {this.state.pageNumbers.map((number, index) => {
              return (
                <li
                  // key={number + 1}
                  key={index}
                  onClick={() => this.props.paginate(number)}
                >
                  <a href="#"> {number} </a>
                </li>
              );
            })}
            <li>Next</li>
          </ul>
        </div>
      </section>
    );
  }
}
