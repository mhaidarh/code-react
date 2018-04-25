import React, { Component } from "react";

import ContentForm from "./ContentForm";
import ContentChildren from "./ContentChildren";
import ContentStyled from "./ContentStyled";
import ContentBootstrap from "./ContentBootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div>
        <ContentChildren>Content Children</ContentChildren>
        <ContentForm />
        <ContentStyled />
        <ContentBootstrap />
      </div>
    );
  }
}

export default App;
