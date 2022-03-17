import React from 'react';
import './App.css';
import Home from './components/Home';
import {BrowserRouter as Router, Route, BrowserRouter} from "react-router-dom"
import {Switch, useParams} from "react-router"
import Main from './components/Main';
import SubComponent from './components/SubComponent';
import HomePage from './components/HomePage';


const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);


// function BlogPost() {
//   let { id } : {id: string} = useParams();
//   console.log(id)
//   return <div style={{ fontSize: "50px" }}>
//            Now showing post {id}
//          </div>;
// }
  
// function Home() {
//   return <h3>home page </h3>;
// }


function App() {
  return (

  //   <Router>
  //   <Switch>
  //     <Route path="/page/:id">
  //       <BlogPost />
  //     </Route>
  //     <Route path="/">
  //       <Home />
  //     </Route>
  //   </Switch>
  // </Router>
    // <div className="App">
    //  < Home />
    // </div>
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

  //   <BrowserRouter>
  //   <Routes>
  //     <Route path="/" element={<Home />} />
  //     <Route path="/artical/:id" element={<SubComponent />} />
  //   </Routes>
  // </BrowserRouter>
  );
}

export default App;
