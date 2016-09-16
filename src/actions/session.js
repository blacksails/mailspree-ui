import { endpoint } from "../config"
import { push } from "react-router-redux"

const session = endpoint() + "/session"

// Action types
export const LOGIN_USERNAME_CHANGE = "LOGIN_USERNAME_CHANGE"
export const LOGIN_PASSWORD_CHANGE = "LOGIN_PASSWORD_CHANGE"
export const LOGIN_REQUEST = "LOGIN_REQUEST"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILURE = "LOGIN_FAILURE"

// Action creators
export const changeUsername = (username) => ({type: LOGIN_USERNAME_CHANGE, username})

export const changePassword = (password) => ({type: LOGIN_PASSWORD_CHANGE, password})

const requestLogin = () => ({type: LOGIN_REQUEST})

const receiveLogin = (session) => ({
  type: LOGIN_SUCCESS,
  token: session.token
})

const loginError = () => ({type: LOGIN_FAILURE})

export const login = (credentials) => {

  let config = {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify(credentials.toJS())
  }

  return (dispatch) => {
    dispatch(requestLogin());
    return fetch(session, config)
      .then(res => {
        res.json()
          .then(json => {
            if (!res.ok) {
              dispatch(loginError())
              return
            }
            dispatch(receiveLogin(json))
            dispatch(push('/send'))
          })
      })
    // TODO: improve this so that the user sees that there is a connection
    // problem with the backend.
      .catch(err => {
        console.log("error fetch: " + err)
        dispatch(loginError())
      })
  }
}
