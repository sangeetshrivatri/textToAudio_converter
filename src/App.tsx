import React from 'react';
import './App.css';
import Home from './components/Home';
import {BrowserRouter as Router, Route } from "react-router-dom"
import {Switch } from "react-router"
import HomePage from './components/HomePage';


const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route path="/article/:id">
          <Home />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
