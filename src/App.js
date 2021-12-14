import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./components/nav";
import Home from "./containers/home";
import Projects from './containers/projects';
import About from './containers/about'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Home />
        <About/>
        <Projects/>
      </Router>
    </div>
  );
}

export default App;
