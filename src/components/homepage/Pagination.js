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

  //increments current page by one
  calcNextPage(){
    //Selects last Page number
    const [lastItem] = this.state.pageNumbers.slice(-1);
    // only increments if last page number is larger
    if(lastItem > this.props.currentPage){
      let nextPage = this.props.currentPage + 1;
      // this changes current page to nextPage
      this.props.paginate(nextPage);
    }
  }
  
  //decrements current page by one
  calcPrevPage(){
    //Selects first Page number
    const [firstItem] = this.state.pageNumbers.slice(0);
    // only decrements if fast page number is smaller
    if(firstItem < this.props.currentPage){
      let prevPage = this.props.currentPage - 1;
      console.log(this.props.currentPage);
      // this changes current page to prevPage
      this.props.paginate(prevPage);
    }
  }

  render() {
    // console.log(this.props.totalPost);
    console.log(this.state.pageNumbers);
    console.log(this.props.currentPage);
    return (
      <section id="pagination">
        <div className="raw">
          <ul className="pagination-nums">
            <li onClick={() => this.calcPrevPage()}>Prev</li>
            {/* Loop through each index and output it with a list tag */}
            {this.state.pageNumbers.map((number, index) => {
              return (
                <li
                  // key={number + 1}
                  className ={this.props.currentPage === number ? 'active':''}
                  key={index}
                  onClick={() => this.props.paginate(number)}
                >
                  <a href="#"> {number} </a>
                </li>
              );
            })}
            <li onClick={() => this.calcNextPage()}>Next</li>
          </ul>
        </div>
      </section>
    );
  }
}
