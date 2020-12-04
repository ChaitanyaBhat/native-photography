import React, {Component} from 'react';
import './App.css';
import {createGlobalStyle} from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';

import HeaderComponents from './components/HeaderComponents';
import IndexComponents from './components/IndexComponents';
import AboutComponents from './components/AboutComponents'
import ContactComponents from './components/ContactComponents';
import MistComponents from './components/MistComponents';
import LandscapeComponents from './components/LandscapeComponents';
import FlowerComponents from './components/FlowerComponents';
import BirdComponents from './components/BirdComponents';
import OtherImgComponents from './components/OtherImgComponents';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  body {
    font-family: Parkavenue, Comic Sans MS, cursive;
    background-color: white;
  }
  `;

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <GlobalStyle/>
          <HeaderComponents/>
          
          <Route path="/" exact strict component={IndexComponents} />

          <Route path="/about" exact strict component={AboutComponents} />
          
          <Route path="/contact" exact strict component={ContactComponents} />

          <Route path="/mist" exact strict component={MistComponents} />

          <Route path="/flower" exact strict component={FlowerComponents} />

          <Route path="/landscape" exact strict component={LandscapeComponents} />

          <Route path="/bird" exact strict component={BirdComponents} />

          <Route path="/other" exact strict component={OtherImgComponents} />
          
        </div>
      </Router>
    )
  } 
}

export default App;
