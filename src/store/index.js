import { applyMiddleware, combineReducers, createStore } from "redux";
import { todoReduser } from "./todo/todoReduser";
import thunk from "redux-thunk";

const rootReduser = combineReducers({
  todo: todoReduser,
});

export const store = createStore(rootReduser, applyMiddleware(thunk));
