import { createStore } from "redux"
import { combineReducers } from "redux-immutable"
import reducers from "./reducers"
import { LOCATION_CHANGE } from "react-router-redux"
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

const configureStore = () => createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  }),
  window.devToolsExtension && window.devToolsExtension()
)

export default configureStore
