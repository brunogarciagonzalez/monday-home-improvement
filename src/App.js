import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import {Grid} from 'semantic-ui-react';
import './App.css';

import Slidebar from './components/Slidebar';
import Topbar from './components/Topbar';
import Home from './components/Home';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';
import Maintenance from './components/Maintenance';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPaneOpen: false
    };
  }

  handlePaneClose = () => {
    this.setState({ isPaneOpen: false })
  }

  handlePaneOpen = () => {
    this.setState({ isPaneOpen: true })
  }
  
  render() {
    return (
      <div className="App">
        <Topbar handlePaneOpen={this.handlePaneOpen}/>
        <Grid>
          <Grid.Row>

            <Grid.Column width={3}>
              <Slidebar isOpen={this.state.isPaneOpen} handleOpen={this.handlePaneOpen} handleClose={this.handlePaneClose} />  
            </Grid.Column>

            <Grid.Column width={13}>
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path ="/gallery" component={Gallery}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/contact" component={Contact}/>
                <Route exact path="/maintenance" component={Maintenance}/>
              </Switch>
            </Grid.Column>
           
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default App;
