import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { NavWrapper, TopNav, SubNav } from './components/Navigation';
import { subNavItems as subNavMac } from './scenes/Mac';
import { subNavItems as subNaviPad } from './scenes/iPad';

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
          <Route path="/mac/" render={(props) => <SubNav {...props} items={subNavMac} />}/>
          <Route path="/ipad/" render={(props) => <SubNav {...props} items={subNaviPad} display="dark"/>}/>
          <Route path="/iphone/" render={(props) => <SubNav {...props} items={subNavMac} />}/>
        </NavWrapper>
        <h1>Apple</h1>
      </div>
    );
  }
}

export default App;
