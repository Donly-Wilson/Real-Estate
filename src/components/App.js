import React, { Component,Fragment } from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
// import {HashRouter as Router, Route, Switch} from 'react-router-dom'; maybe for netlify
import Header from "./Header";
import HomePage from "./homepage/HomePage";
import CreateAds from "./createAds/CreateAds";

class App extends Component {
render() {
    return (
        <Router>
            <div>
                {" "}
                <Header />
                <Switch>
                    <Route path = "/homes">
                        <HomePage />
                    </Route>
                    <Route path = "/createads">
                        <CreateAds />
                    </Route>
                    {/* <Route path = "/aboutus">
                        <AboutUs />
                    </Route> */}
                    {/* <div className="landing__page">
                        <p>Landing Page under Constraction </p>
                        <Link to="/homes">
                            View House Listings
                        </Link>
                    </div> */}
                </Switch>
            </div>
        </Router>
    );
  }
}

const app = document.getElementById("app");
ReactDOM.render(<App />, app);