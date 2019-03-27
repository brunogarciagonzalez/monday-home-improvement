import React from "react";
import { Segment, Header, Grid } from "semantic-ui-react";

class Topbar extends React.Component {
  addTagline() {
    let textArr = [
      "K",
      "i",
      "t",
      "c",
      "h",
      "e",
      "n",
      "&nbsp;",
      "&",
      "&nbsp;",
      "B",
      "a",
      "t",
      "h",
      "r",
      "o",
      "o",
      "m",
      "&nbsp;",
      "R",
      "e",
      "m",
      "o",
      "d",
      "e",
      "l",
      "i",
      "n",
      "g",
      "&nbsp;",
      "S",
      "p",
      "e",
      "c",
      "i",
      "a",
      "l",
      "i",
      "s",
      "t",
      "s",
      "."
    ];
    // get access to the header, vanilla js
    let txtEle = document.getElementById("tagline");

    // clear contents, in case this is not first run through
    txtEle.innerHMTL = "";

    // edit its innerHMTL iteratively
    // editing innerHTML to apply nbsp;
    textArr.forEach((char, idx) => {
      setTimeout(() => {
        txtEle.innerHTML += char;
      }, idx * 200);
    });

    // TODO: make period blink until next cycle?
    // TODO: add cycles
  }

  componentDidMount() {
    this.addTagline();
  }

  // could be 4/2/8/2
  // or 3/2/8/3
  render() {
    return (
      <Segment basic>
        <Grid verticalAlign="middle">
          <Grid.Row>
            <Grid.Column width={4}>
              <button
                id="topbar-button"
                style={{
                  backgroundColor: "#D21F1B",
                  color: "white",
                  borderRadius: "10px"
                }}
                onClick={this.props.handlePaneOpen}
              >
                MENU
              </button>
            </Grid.Column>

            <Grid.Column width={2} className="topbar-right">
              <Header as="h1">
                <img src="./company_logo.png" alt="company logo" />
              </Header>
            </Grid.Column>

            <Grid.Column width={8} className="topbar-left">
              <Grid.Row>
                <Header as="h1">
                  <span id="main-name">Monday Home Improvement, LLC.</span>
                </Header>
              </Grid.Row>
              <Grid.Row>
                <p id="tagline" />
              </Grid.Row>
            </Grid.Column>

            <Grid.Column width={2} />
          </Grid.Row>
        </Grid>
        <hr />
      </Segment>
    );
  }
}

export default Topbar;
