import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import SubComponent from './components/SubComponent';

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);


function App() {
  return (
    <div className="App">
     < Home />
    </div>
  );
}

export default App;
