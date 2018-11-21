import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { shallow } from "enzyme";

it("renders without crashing", () => {
  const loadData = () => "Test Val";
  const wrapper = shallow(<App loadData={loadData} />);
  expect(wrapper).toMatchSnapshot();
});
