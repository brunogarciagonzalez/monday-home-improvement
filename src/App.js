import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Grid } from "semantic-ui-react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./App.css";

import Slidebar from "./components/Slidebar";
import Topbar from "./components/Topbar";
import Footbar from "./components/Footbar";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import About from "./components/About";
// import Contact from "./components/Contact";
import References from "./components/References";
import Maintenance from "./components/Maintenance";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPaneOpen: false
    };
  }

  handlePaneClose = () => {
    this.setState({ isPaneOpen: false });
  };

  handlePaneOpen = () => {
    this.setState({ isPaneOpen: true });
  };

  componentDidMount() {
    console.log("© 2019 Monday Home Improvement, LLC.");
    console.log(
      "Written by the Grace Of GOD by Bruno Garcia Gonzalez (https://bruno.business)"
    );

    if (window.innerWidth <= 600) {
      setTimeout(() => {
        alert(
          "This website is not optimized for small screens. Please use a bigger screen for a better experienced."
        );
      }, 0);
    }

    if (navigator.userAgent.indexOf("Chrome") != -1) {
      // is Chrome, webpage is optimized for Chrome
    } else if (navigator.userAgent.indexOf("Firefox") != -1) {
      // is Firefox, webpage is optimized for Firefox
    } else {
      setTimeout(() => {
        alert(
          "This website is only optimized for Chrome & Firefox. For best experience, please use one of these two Browsers."
        );
      }, 0);
    }
  }

  render() {
    return (
      <div className="App">
        <Topbar handlePaneOpen={this.handlePaneOpen} />
        <Grid>
          <Grid.Row>
            <Grid.Column width={2}>
              <Slidebar
                isOpen={this.state.isPaneOpen}
                handleOpen={this.handlePaneOpen}
                handleClose={this.handlePaneClose}
              />
            </Grid.Column>

            <Grid.Column width={12}>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/gallery" component={Gallery} />
                <Route exact path="/about" component={About} />
                <Route exact path="/references" component={References} />
                <Route exact path="/maintenance" component={Maintenance} />
              </Switch>
            </Grid.Column>

            <Grid.Column width={2} />
          </Grid.Row>
        </Grid>
        <Footbar />
      </div>
    );
  }
}

export default App;

// <Route exact path="/contact" component={Contact} />
