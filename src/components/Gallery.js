import React, { Component } from "react";
import { Tab, Header } from "semantic-ui-react";
import galleryPanes from "./../galleryPanes.js";

class Gallery extends Component {
  render() {
    return (
      <div>
        <Header as="h2" style={{ textAlign: "center" }}>
          Photo Gallery
        </Header>

        <Tab panes={galleryPanes} menu={{ secondary: true }} />
      </div>
    );
  }
}

export default Gallery;
