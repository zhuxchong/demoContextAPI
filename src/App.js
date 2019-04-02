import React, { Component } from "react";
import Show from "./component/show";

import GlobalState from "./store/GlobalState";
class App extends Component {
  render() {
    return (
      <GlobalState>
        <Show />
      </GlobalState>
    );
  }
}

export default App;
