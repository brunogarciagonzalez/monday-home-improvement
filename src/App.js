import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import {Grid} from 'semantic-ui-react';
import './App.css';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Home from './components/Home';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';
import Maintenance from './components/Maintenance';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Topbar />
        <Grid>
          <Grid.Row>

            <Grid.Column width={3}>
              <Sidebar />
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
