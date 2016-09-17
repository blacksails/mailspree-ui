import { 
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_USERNAME_CHANGE,
  LOGIN_PASSWORD_CHANGE,
  LOGOUT
} from "../actions/session"
import Immutable from "immutable"
import { combineReducers } from "redux-immutable"

const emptyCreds = Immutable.Map({"username": "", "password": ""})
const credentials = (state = emptyCreds, action) => {
  switch (action.type) {
    case LOGIN_USERNAME_CHANGE:
      return state.set("username", action.username)
    case LOGIN_PASSWORD_CHANGE:
      return state.set("password", action.password)
    case LOGIN_SUCCESS:
      return emptyCreds
    default:
      return state
  }
}

const loginFailed = (state = false, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return false
    case LOGIN_FAILURE:
      return true
    default:
      return state
  }
}

const token = (state = null, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return action.token
    case LOGOUT:
      return null
    default:
      return state
  }
}

const isFetching = (state = false, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return true
    case LOGIN_SUCCESS:
    case LOGIN_FAILURE:
      return false
    default:
      return state
  }
}

// Selectors
const getSession = state => state.get("session")
export const getToken = state => getSession(state).get("token")
export const isAuthenticated = state => getToken(state) !== null
export const getCredentials = state => getSession(state).get("credentials")
export const getLoginFailed = state => getSession(state).get("loginFailed")

export default combineReducers({credentials, loginFailed, token, isFetching})
