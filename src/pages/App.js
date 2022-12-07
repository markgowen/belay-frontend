import React from 'react';
import '../styling/App.css';
import NavBar from '../components/NavBar';
import Discover from './Discover';
import Climb from "./Climb";
import Home from "./Home";
import Share from "./Share";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/discover" component={Discover} />
            <Route path="/climb" exact component={Climb} />
            <Route path="/share" exact component={Share} />
          </Switch>
        </div>
      </Router>
  );
}

export default App;
