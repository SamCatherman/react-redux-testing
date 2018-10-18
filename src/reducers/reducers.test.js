import React from "react";
import { postsReducer } from "./reducers";

describe("postsReducer", () => {
  it("initializes state to empty array", () => {
    let action = { type: "@@INIT" };
    expect(postsReducer(undefined, action)).toEqual([]);
  });

  // sample data for loading posts
  // let posts = [{ title: "testpost 1" }, { title: "testpost2" }];
  // let action = { type: "LOAD_DATA", payload: posts };
});
