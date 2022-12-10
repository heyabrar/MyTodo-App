import {legacy_createStore,applyMiddleware} from "redux"
import TodoReducer from "./Reducer";
import thunk from "redux-thunk"
export const MyStore = legacy_createStore(TodoReducer,applyMiddleware(thunk));