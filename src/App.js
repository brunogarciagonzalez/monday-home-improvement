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
