import React from "react";
import { Carousel } from "react-responsive-carousel";

export default props => (
  <Carousel
    autoPlay
    dynamicHeight
    stopOnHover
    interval={5000}
    showThumbs={false}
  >
    {props.images.map(x => {
      return (
        <div key={x.src}>
          <img src={x.src} alt={x.category} />
          <p className="legend">&copy; Monday Home Improvement, LLC.</p>
        </div>
      );
    })}
  </Carousel>
);
