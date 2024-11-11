import { combineReducers, createStore } from "redux";
import ToDoReducer from "./Reducer/ToDoReducer";

const reducer = combineReducers({ ToDo: ToDoReducer });

const store = createStore(reducer);

export default store;
