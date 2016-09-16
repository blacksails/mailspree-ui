import { createStore, compose, applyMiddleware } from "redux"
import { combineReducers } from "redux-immutable"
import reducers from "./reducers"
import thunk from "redux-thunk"
import { routerMiddleware } from "react-router-redux"
import Immutable from "immutable"

const configureStore = (history) => createStore(
  reducers,
  Immutable.Map(),
  compose(
    applyMiddleware(thunk, routerMiddleware(history)),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

export default configureStore
