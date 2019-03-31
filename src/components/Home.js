import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div id="home-text">
        <p>
          We at Monday Home Improvement, LLC. Would like to thank you for
          considering us for your home improvement goals. Our number one
          priority is to provide our customers with the highest notch work, work
          we can stand behind 100%. We are honest, experienced, and experienced.
          Whether you have $5,000 or $50,000 to spend on your home improvements,
          there are no jobs too big or small! Give us a call today for a free
          estimate.
        </p>
        <center>
          <p>We are licensed, Bonded, Insured, and OSHA-10 Certified.</p>
        </center>
        <br />
        <br />
        <p>
          We hope to work with you throughout the entire process of the project.
          This could include helping you select quality products and materials
          at the best prices on the market. Thanks to our friends at{" "}
          <a
            href="https://www.ferguson.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ferguson
          </a>{" "}
          and{" "}
          <a
            href="https://www.daltile.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Daltile
          </a>, we are able to provide you the largest selection of products for
          kitchens and bathrooms.
        </p>
        <center>
          <p>Visit our photo gallery and get inspired!</p>
          <Link to="/gallery">
            <button
              type="button"
              style={{
                backgroundColor: "#D21F1B",
                color: "white",
                borderRadius: "10px"
              }}
              onClick={console.log}
            >
              See Gallery
            </button>
          </Link>
        </center>
      </div>
    );
  }
}

export default Home;

// <p>
//   Monday Home Improvement, LLC.<br />
// Phone: (301) 399. 1094<br />
// Fax: (301) 498. 5370 <br />
// 8830 Castlebury Court<br />
// Laurel, MD 20723<br />
// MondayHomeImprovement@hotmail.com<br />
// <br />
// <br />
// www.DaltileProducts.com<br />
// www.Ferguson.com<br />
// </p>
