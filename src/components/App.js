import React, { Component } from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Header from "./Header";
import HomePage from "./homepage/HomePage";
import CreateAds from "./createAds/CreateAds";
import ListingDetails from "./listingdetails/ListingDetails";

class App extends Component {
render() {
    return (
        <Router basename="/">
            <div>
                {" "}
                <Header />
                <Switch>
                    <Route exact path = "/">
                        <HomePage />
                    </Route>
                    <Route path = "/createads">
                        <CreateAds />
                    </Route>
                    {/* <Route path = "/aboutus">
                        <AboutUs />
                    </Route> */}
                    <Route path = "/listing/:id">
                        <ListingDetails />
                    </Route>
                </Switch>
            </div>
        </Router>
        // <div>
        //     <Header />
        //     <HomePage />
        // </div>
    );
  }
}

const app = document.getElementById("app");
ReactDOM.render(<App />, app);