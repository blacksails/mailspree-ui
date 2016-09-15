import { createStore, compose, applyMiddleware } from "redux"
import { combineReducers } from "redux-immutable"
import reducers from "./reducers"
import thunk from "redux-thunk"
import { LOCATION_CHANGE, routerMiddleware } from "react-router-redux"
import Immutable from "immutable"

const initialRouterState = Immutable.fromJS({
  locationBeforeTransitions: null
})
const routerReducer = (state = initialRouterState, action) => {
  if (action.type === LOCATION_CHANGE) {
    return state.merge({
      locationBeforeTransitions: action.payload
    })
  }
  return state
}

const initialState = Immutable.Map()

const configureStore = (history) => createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  }),
  initialState,
  compose(
    applyMiddleware(thunk, routerMiddleware(history)),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

export default configureStore
