import { createStore } from "redux";

const reducer = (state = { count: 0 }, action) => {
  if (action.type === "increment") {
    return {
      count: state.count + 1,
    };
  } else if (action.type === "decrement") {
    return {
      count: state.count - 1,
    };
  } else if (action.type === "reset") {
    return {
      count: 0,
    };
  }
  return state;
};

const store = createStore(reducer);

export default store;
