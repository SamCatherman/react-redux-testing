import { addTodo, toggleComplete, loadData } from "./index.js";
import { TOGGLE_COMPLETE, ADD_TODO, LOAD_DATA } from "./types";

describe("actions", () => {
  test("Load Data Action Creator", () => {
    const mockData = {
      todos: [
        { text: "learn redux", complete: false },
        { text: "build a cool project", complete: false },
        { text: "Make more bruno emojis", complete: true }
      ]
    };
    const action = {
      type: LOAD_DATA,
      data: mockData
    };
    expect(loadData()).toEqual(action);
  });

  test("Add Todo Action Creator", () => {
    const sampleTodo = { text: "test-TODO", complete: false };
    const action = { type: ADD_TODO, todo: sampleTodo };
    expect(addTodo(sampleTodo)).toEqual(action);
  });

  // when this action is dispatched, I want the todo that was clicked
  // on to switch from true to false
  test("Toggle Complete Action Creator", () => {
    const todo = {
      text: "test",
      complete: false
    };
    const action = {
      type: TOGGLE_COMPLETE,
      todo: todo
    };

    expect(toggleComplete(todo)).toEqual(action);
  });

  //TODO - remove todo from store
});
