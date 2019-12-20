import './App.css';
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import MenuBar from './MenuBar.js'
import About from './About.js'

function App() {
  return (
    <Router>
      <div id='app'>
        <MenuBar />
        <Switch>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/'>
            <div id='welcome'>
              <p>Hi, my name is Jason. I'm a diehard sports fan. </p>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
