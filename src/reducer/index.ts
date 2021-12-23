import { applyMiddleware, combineReducers, createStore } from "redux";
import { UserReducer } from "./user-reducer";
import logger from 'redux-logger';


export const appReducer = combineReducers({
    users: UserReducer
})

export const appStore = createStore(appReducer, applyMiddleware(logger))