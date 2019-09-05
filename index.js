import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Navbar from './components/Navbar';
import CardContainer from './components/CardContainer';
import ListContainer from './components/ListContainer';
import './style.css';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Router>
        <Navbar />

        <Route path="/card" component={CardContainer} />
        <Route path="/list" component={ListContainer} />

       
      </Router>
    );
  }
}

render(<App />, document.getElementById('root'));
