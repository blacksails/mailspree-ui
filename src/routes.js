import React from "react"
import { Route, IndexRoute } from "react-router"
import App from "./components/App"
import SendEmail from "./components/SendEmail"
import Login from "./components/Login"
import { isAuthenticated } from "./reducers/session"

const getRoutes = (store) => {
  
  const checkAuth = (next, replace) => {
    if (!isAuthenticated(store.getState())) {
      replace("/login")
    }
  }

  return (
    <Route path="/" component={App}>
      <IndexRoute component={SendEmail} onEnter={checkAuth} />
      <Route path="/login" component={Login} />
    </Route>
  )

}

export default getRoutes
