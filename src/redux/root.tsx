import { combineReducers, createStore } from "redux";
import { Todo } from "./store/todo";
import { JWT } from "./store/jwt";

export const rootReducer = combineReducers({
    jwt: JWT,
    todo: Todo
});

export const store = createStore(rootReducer);