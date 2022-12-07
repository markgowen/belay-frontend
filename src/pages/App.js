import React from 'react';
import '../styling/App.css';
import NavBar from '../components/NavBar';
import Discover from './Discover';
import ClimbDetails from "../components/ClimbDetails";
import Home from "./Home";
import Share from "./Share";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
      <Router>
          <NavBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/discover" exact component={Discover} />
            <Route path="/discover/:id" component={ClimbDetails} />
            <Route path="/share" exact component={Share} />
          </Switch>
      </Router>
  );
}

export default App;
