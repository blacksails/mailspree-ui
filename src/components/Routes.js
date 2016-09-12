import React from "react"
import { Router, IndexRoute, Route } from "react-router"
import App from "./App"
import SendEmail from "./SendEmail"

const Routes = ({history}) => (
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={SendEmail} />
    </Route>
  </Router>
)

export default Routes
