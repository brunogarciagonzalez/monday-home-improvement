import React, { Component } from "react";
import { Tab } from "semantic-ui-react";
import galleryPanes from "./../galleryPanes.js";

class Gallery extends Component {
  render() {
    return (
      <div>
        <p>Photo Gallery</p>
        <Tab panes={galleryPanes} menu={{ secondary: true }} />
      </div>
    );
  }
}

export default Gallery;
