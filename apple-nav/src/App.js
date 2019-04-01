import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { NavWrapper, TopNav, SubNav } from './components/Navigation';
import { subNavItems } from './scenes/Mac';

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
          <Route path="/mac/" render={(props) => <SubNav {...props} items={subNavItems} />}/>
          <Route path="/ipad/" render={(props) => <SubNav {...props} items={subNavItems} display="dark"/>}/>
        </NavWrapper>
        <h1>Apple</h1>
      </div>
    );
  }
}

export default App;
