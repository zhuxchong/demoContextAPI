import React from "react";
import TestContext from "../store/test-context";
class Show extends React.Component {
  static contextType = TestContext;
  componentDidMount() {}

  render() {
    return <div>{this.context.test}</div>;
  }
}
export default Show;
