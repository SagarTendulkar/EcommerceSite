import thunk from "redux-thunk";
import { reducer } from "../productReducer/reducer";
import { applyMiddleware, createStore } from "redux";

export const store = createStore(reducer, applyMiddleware(thunk))