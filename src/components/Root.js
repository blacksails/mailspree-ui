import React from "react"
import { Provider } from "react-redux"
import { browserHistory } from "react-router"
import { syncHistoryWithStore } from "react-router-redux"
import configureStore from "../configureStore"
import Routes from "./routes"

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState(state) {
    return state.get("routing").toJS()
  }
})

const Root = () => (
  <Provider store={store}>
    <Routes history={history}/>
  </Provider>
)

export default Root
