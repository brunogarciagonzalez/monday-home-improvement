import React, { Component } from "react";
import { Header, Card } from "semantic-ui-react";

const styleObj = {
  width: "100%"
};

class About extends Component {
  render() {
    return (
      <div>
        <Header as="h2" style={{ textAlign: "center" }}>
          About Us
        </Header>
        <Card style={styleObj}>
          <Header as="h1">
            <img
              src="./about_hero.jpg"
              alt="employees in front of work van"
              style={styleObj}
            />
          </Header>
        </Card>
        <p>
          Monday Home Improvement, LLC. Was created by Marcos G. Bebeacua (in
          photo, left) in 2001 to serve customers in Maryland, District of
          Columbia, and Virginia. Today, Monday Home Improvement, LLC. focuses
          on providing high quality remodeling services at an affordable price
          to all of its clients.
        </p>
        <p>Maryland Home Improvement Commission (MHIC) Number: 128038</p>
      </div>
    );
  }
}

export default About;
