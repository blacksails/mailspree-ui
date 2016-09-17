import { createStore, compose, applyMiddleware } from "redux"
import reducers from "./reducers"
import thunk from "redux-thunk"
import { routerMiddleware } from "react-router-redux"
import Immutable from "immutable"
import throttle from "lodash/throttle"

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state")
    if (serializedState === null) {
      return Immutable.Map()
    }
    return Immutable.fromJS(JSON.parse(serializedState))
  } catch(err) {
    return Immutable.Map()
  }
}

const saveState = (state) => {
  try {
    // for now lets just save the session data
    state.filter((v, k) => k === "session") 
    const serializedState = JSON.stringify(state.toJS())
    localStorage.setItem("state", serializedState)
  } catch(err) {
    // ignore write errors for now
  }
}

const configureStore = (history) => {
  const store = createStore(
    reducers,
    loadState(),
    compose(
      applyMiddleware(thunk, routerMiddleware(history)),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  )
  store.subscribe(throttle(() => {
    saveState(store.getState())
  }, 1000))
  return store
}

export default configureStore
