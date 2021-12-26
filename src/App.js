import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./components/nav";
import Home from "./containers/home";
import Projects from "./containers/projects";
import About from "./containers/about";
import Experience from "./containers/experience";

class App extends Component {
  constructor() {
    super();
    this.state = {
      animationClass: null,
    };

  }

  restartAni = () => {
    this.setState(
      {
        animationClass: null,
      },
      () => {
        setTimeout(() => {
          this.setState({
            animationClass: "animation",
          });
        }, 500);
      }
    );
  };

  render() {
    return (
      <div className="App">
        <Router>
          <Navbar onClick={this.restartAni} />
          <Home />
          <About animationClass={this.state.animationClass} />
          <Experience/>
          <Projects />
        </Router>
      </div>
    );
  }
}

export default App;
