import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./actions";
import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.loadData();
  }

  render() {
    return (
      <div className="App">
        <h1>"HELLO"</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};
export default connect(
  mapStateToProps,
  actions
)(App);
