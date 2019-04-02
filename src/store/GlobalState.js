import React, { Component } from "react";
import TestContext from "./test-context";
class GlobalState extends Component {
  state = {
    test: "testFromDefault"
  };
  testFunction = () => {};

  render() {
    return (
      <TestContext.Provider
        value={{
          test: this.state.test
        }}
      >
        {this.props.children}
      </TestContext.Provider>
    );
  }
}
export default GlobalState;
