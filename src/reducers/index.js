import email from "./email"
import session from "./session"
import routing from "./routing"
import { combineReducers } from "redux-immutable"

export default combineReducers({
  email,
  session,
  routing
})
