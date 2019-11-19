import React from "react";
import { Segment, Header, Grid } from "semantic-ui-react";

class Topbar extends React.Component {
  state = {
    firstRun: true,
    isFlipped: false,
    intervalID: null
  };

  addTagline = () => {
     // get access to the header, vanilla js
    let txtEle = document.getElementById("tagline");
    let textString = "Kitchen & Bathroom Remodeling Specialists.";
    let textArr = [ "K", "i", "t", "c", "h", "e", "n", "&nbsp;", "&", "&nbsp;", "B", "a", "t", "h", "r", "o", "o", "m", "&nbsp;", "R", "e", "m", "o", "d", "e", "l", "i", "n", "g", "&nbsp;", "S", "p", "e", "c", "i", "a", "l", "i", "s", "t", "s", "." ];
    debugger
    let isIncomplete = txtEle.innerText !== textString;
    if (isIncomplete && !this.state.firstRun) {
        return false
    }

    // clear contents, in case this is not first run through
    txtEle.innerHTML = "";

    // edit its innerHMTL iteratively
    // editing innerHTML to apply nbsp;
    textArr.forEach((char, idx) => {
      setTimeout(() => {
        txtEle.innerHTML += char;
      }, idx * 200);
    });

    const updateFirstRun = () => this.setState({firstRun: false});
    setTimeout(updateFirstRun,0)
  }

  handleVisibility = e => {
    if (document.hidden) {
      this.endImageAnimation();
    } else {
      this.init();
    }
  };

  startImageAnimation = () => {
    let logoContainer = document.querySelector(".flip-card-inner");
    const toggleFlipState = () => this.setState({isFlipped: !this.state.isFlipped});
    // depending on current state , flip 180 or 360
    if(this.state.isFlipped){
        toggleFlipState();
        logoContainer.style.transform = "rotatey(360deg)";
        logoContainer.style.transitionDuration = "3.5s";
    } else {
        toggleFlipState();
        logoContainer.style.transform = "rotatey(180deg)";
        logoContainer.style.transitionDuration = "3.5s";
    }
  };

  endImageAnimation = () => {
    if (this.state.intervalID) {
      clearInterval(this.state.intervalID);
      this.setState({ intervalID: null });
    }
  };

  startIntervalAndGetItsID = () => setInterval(this.startImageAnimation, 10000);

  init = () => {
    this.addTagline();
    setTimeout(this.startImageAnimation, 500);
    this.setState({intervalID: this.startIntervalAndGetItsID()});
  }

  componentDidMount() {
    this.init();
    document.addEventListener("visibilitychange", this.handleVisibility);
  }

  componentWillUnmount() {
    this.endImageAnimation();
  }

  triggerRedirect = () => {
    this.props.history.push("/");
  };
  // could be 4/2/8/2
  // or 3/2/8/3
  render() {
    return (
      <Segment basic>
        <Grid verticalAlign="middle">
          <Grid.Row>
            <Grid.Column width={4}>
              <button
                type="button"
                id="topbar-button"
                className="cursor-pointer"
                style={{
                  backgroundColor: "#D21F1B",
                  color: "white",
                  borderRadius: "10px",
                  fontWeight: "800"
                }}
                onClick={this.props.handlePaneOpen}
              >
                MENU
              </button>
            </Grid.Column>

            <Grid.Column width={2} id="logo-flex">
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img
                            className="front cursor-pointer"
                            src="./company_logo.png"
                            alt="company logo"
                            onClick={this.triggerRedirect}
                            />
                        </div>
                        <div className="flip-card-back">
                            <img
                            className="back cursor-pointer"
                            src="./company_logo.png"
                            alt="company logo"
                            onClick={this.triggerRedirect}
                            />
                        </div>
                    </div>
                </div>
            </Grid.Column>

            <Grid.Column width={8} className="topbar-left">
              <Grid.Row>
                <Header
                  as="h1"
                  onClick={this.triggerRedirect}
                  className="cursor-pointer"
                >
                  <span id="main-name">Monday Home Improvement, LLC.</span>
                </Header>
              </Grid.Row>
              <Grid.Row>
                <p
                  id="tagline"
                  onClick={this.triggerRedirect}
                  className="cursor-pointer"
                />
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
