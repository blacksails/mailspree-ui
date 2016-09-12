import { createStore, combineReducers } from "redux"
import reducers from "./reducers"
import { routerReducer } from "react-router-redux"

const configureStore = () => createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  })
)

export default configureStore
