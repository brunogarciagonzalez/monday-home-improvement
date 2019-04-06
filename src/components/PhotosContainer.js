import React, { Component } from "react";
import { Card, Image } from "semantic-ui-react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

class PhotosContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      modalSrc: null
    };
  }

  render() {
    const { isOpen, modalSrc } = this.state;
    const { images } = this.props;

    return (
      <div>
        {isOpen && (
          <Lightbox
            mainSrc={modalSrc}
            onCloseRequest={() =>
              this.setState({ isOpen: false, modalSrc: null })
            }
          />
        )}
        <Card.Group>
          {images.map(photo => {
            return (
              <Card
                onClick={() =>
                  this.setState({ isOpen: true, modalSrc: photo.src })
                }
              >
                <Card.Content>
                  <Image rounded size="medium" src={photo.src} />
                </Card.Content>
              </Card>
            );
          })}
        </Card.Group>
      </div>
    );
  }
}

export default PhotosContainer;
