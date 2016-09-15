import React from "react"
import { Provider } from "react-redux"
import { Router, browserHistory } from "react-router"
import { syncHistoryWithStore } from "react-router-redux"
import configureStore from "../configureStore"
import getRoutes from "../routes"

const store = configureStore(browserHistory)
const routes = getRoutes(store)
const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState(state) {
    return state.get("routing").toJS()
  }
})

const Root = () => (
  <Provider store={store}>
    <Router history={history} routes={routes}/>
  </Provider>
)

export default Root
