import React, { Component} from "react";
import {hot} from "react-hot-loader";
import { Canvas } from "./Components/Canvas/Canvas";
import { PropPanel } from "./Components/PropPanel/Prop-panel";
import "./App.css";

class App extends Component{
  render(){
    return(
      <div className="App">
        <Canvas />
        <PropPanel />
      </div>
    );
  }
}

export default hot(module)(App);
