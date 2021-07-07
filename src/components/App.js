import React, { Component} from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
// import {HashRouter as Router, Route, Switch} from 'react-router-dom'; maybe for netlify
import Header from "./Header/Header";
import HomePage from "./homepage/HomePage";
import CreateAds from "./createAds/CreateAds";
import LandingPage from "./homepage/LandingPage";

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
                    <LandingPage/>
                </Switch>
            </div>
        </Router>
    );
  }
}

const app = document.getElementById("app");
ReactDOM.render(<App />, app);