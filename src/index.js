import "./styles/global.scss"
import React from "react"
import ReactDOM from "react-dom"
import { createStore, combineReducers } from "redux"
import { Provider } from "react-redux"
import { Router, IndexRoute, Route, browserHistory } from "react-router"
import { syncHistoryWithStore, routerReducer } from "react-router-redux"
import reducers from "./reducers"

// import components
import App from "./components/App"
import SendEmail from "./components/SendEmail"

const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  })
)

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={SendEmail} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById("root")
)
