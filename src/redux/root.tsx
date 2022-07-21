import { applyMiddleware, combineReducers, createStore } from "redux";
import { Todo } from "./store/todo";
import { JWT } from "./store/jwt";
import thunk from "redux-thunk";

export const rootReducer = combineReducers({
    jwt: JWT,
    todo: Todo,
});

export type AppDispatch = typeof store.dispatch

export const store = createStore(rootReducer, applyMiddleware(thunk));
