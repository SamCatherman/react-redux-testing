import todosReducer from "./reducer";
import { LOAD_DATA, ADD_TODO, TOGGLE_COMPLETE } from "../actions/types";

describe("Todos Reducer", () => {
  const data = {
    todos: [
      { text: "learn redux", complete: false },
      { text: "build a cool project", complete: false },
      { text: "Make more bruno emojis", complete: true }
    ]
  };

  test("initializes state to an empty array", () => {
    let action = { type: "@@INIT" };
    expect(todosReducer(undefined, action)).toEqual([]);
  });

  test("returns an array of todos when the loadData action is dispatched", () => {
    let action = { type: LOAD_DATA, data: data };
    expect(todosReducer([], action)).toEqual(data);
  });

  test("returns an array with a new todo at the end when addTodo action is dispatched", () => {
    let todoTextToAdd = "Adding a New Task";
    let action = { type: ADD_TODO, todo: todoTextToAdd };
    let addedTodo = {
      todos: [
        { text: "learn redux", complete: false },
        { text: "build a cool project", complete: false },
        { text: "Make more bruno emojis", complete: true },
        { text: "Adding a New Task", complete: false }
      ]
    };

    expect(todosReducer(data, action)).toEqual(addedTodo);
  });

  test("returns an array with a clicked todo's complete property toggled", () => {
    let clickedTodo = { text: "learn redux", complete: false };
    let action = { type: TOGGLE_COMPLETE, todo: clickedTodo };
    let updatedData = {
      todos: [
        { text: "learn redux", complete: true },
        { text: "build a cool project", complete: false },
        { text: "Make more bruno emojis", complete: true }
      ]
    };
    expect(todosReducer(data, action)).toEqual(updatedData);
  });
});
