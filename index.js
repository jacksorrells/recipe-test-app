import React, { Component } from 'react';
import { render } from 'react-dom';
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
      <div>
        <Navbar />
        <CardContainer />
        <ListContainer />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
