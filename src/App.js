import React, { Component } from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Work from "./Components/Work/Work";
import NavBar from "./Components/Navigation/NavBar";
import Connect from "./Components/Connect/Connect";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Home />
        <About />
        <Work />
        <Connect />
      </div>
    );
  }
}

export default App;
