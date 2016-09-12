import React from "react"
import { Provider } from "react-redux"
import { browserHistory } from "react-router"
import { syncHistoryWithStore } from "react-router-redux"
import configureStore from "../configureStore"
import Routes from "./routes"

const store = configureStore()

const Root = () => (
  <Provider store={store}>
    <Routes history={syncHistoryWithStore(browserHistory, store)}/>
  </Provider>
)

export default Root
