import React, { Component } from "react";
import { Card, Image } from "semantic-ui-react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

class PhotosContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      photoIndex: 0
    };
  }

  render() {
    const { isOpen, photoIndex } = this.state;
    const { images } = this.props;

    return (
      <div>
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex].src}
            nextSrc={images[(photoIndex + 1) % images.length].src}
            prevSrc={
              images[(photoIndex + images.length - 1) % images.length].src
            }
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length
              })
            }
          />
        )}
        <Card.Group centered>
          {images.map((photo, idx) => {
            return (
              <Card
                key={idx}
                onClick={() => this.setState({ isOpen: true, photoIndex: idx })}
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
