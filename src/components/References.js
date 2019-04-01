import React, { Component } from "react";
import { Header, Card } from "semantic-ui-react";
import referencesList from "./../referencesList.js";

const style = { width: "100%" };
class References extends Component {
  render() {
    return (
      <div>
        <Header as="h2" style={{ textAlign: "center" }}>
          References
        </Header>
        {referencesList.map(ref => {
          return (
            <div>
              <Card style={style}>{ref.content}</Card>
              <Header as="h3" />
            </div>
          );
        })}
      </div>
    );
  }
}

export default References;
