import React from "react";
import { App } from "./App";
import { shallow } from "enzyme";
import data from "./data/data";
import PostsContainer from "./Components/PostsContainer";

it("renders without crashing", () => {
  const wrapper = shallow(<App />);
  console.log("wrapper", wrapper);
  expect(wrapper.find(".App").length).toEqual(1);
});

// it("renders the PostsContainer component", () => {
//   const wrapper = shallow(<App />);
//   expect(wrapper.containsMatchingElement(<PostsContainer />)).toEqual(true);
// });
