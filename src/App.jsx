import React, { Component } from "react";

import ContentForm from "./ContentForm";
import ContentChildren from "./ContentChildren";

class App extends Component {
  render() {
    return (
      <div>
        <ContentChildren>Content Children</ContentChildren>
        <ContentForm />
      </div>
    );
  }
}

export default App;
