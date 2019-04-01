import React, { Component } from 'react';
import './App.css';
import { NavWrapper, TopNav } from './components/Navigation';

const links = [
  "Mac",
  "iPad",
  "iPhone",
  "Watch",
  "TV",
  "Music",
  "Support",
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavWrapper>
          <TopNav links={links}/>
        </NavWrapper>
        <h1>Apple</h1>
      </div>
    );
  }
}

export default App;
