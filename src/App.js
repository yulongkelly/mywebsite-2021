import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/nav";
import Home from "./containers/home";
import Projects from './containers/projects';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Home />
        <Projects/>
      </Router>
    </div>
  );
}

export default App;
