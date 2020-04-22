import React, {Component} from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Step1 from './components/step1';
import Landing from './components/landing';
import Selection from './components/selection';
import Itinerary from './components/itinerary';
import Profile from './components/profile';
import Login from './components/Login';
import Register from './components/register';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/profile" component={Profile} />
            <Route path="/steps" component={Step1} />
            <Route path="/selection" component={Selection} />
            <Route path="/itinerary" component={Itinerary} />
          </Switch>
        </div>
      </Router>

    );
  }

}

export default App;
