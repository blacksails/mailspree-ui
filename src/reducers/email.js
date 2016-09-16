import { combineReducers } from "redux-immutable"
import { 
  CHANGE_EMAIL,
  SEND_START,
  SEND_SUCCESS,
  SEND_FAILURE,
  SEND_FAILURE_HIDE
} from "../actions/email"
import Immutable from "immutable"

// Initial states
const emptyMessage = Immutable.Map({
  "to": "",
  "from": "",
  "subject": "",
  "body": "",
})

// Reducers
const message = (state = emptyMessage, action) => {
  switch (action.type) {
    case CHANGE_EMAIL:
      return state.set(action.field, action.value)
    default:
      return state
  }
}

const isSending = (state = false, action) => {
  switch (action.type) {
    case SEND_START:
      return true
    case SEND_SUCCESS:
    case SEND_FAILURE:
      return false
    default:
      return state
  }
}

const sendFailed = (state = false, action) => {
  switch (action.type) {
    case SEND_SUCCESS:
    case SEND_FAILURE_HIDE:
      return false
    case SEND_FAILURE:
      return true
    default:
      return state
  }
}

const sendSucceeded = (state = false, action) => {
  switch (action.type) {
    case SEND_SUCCESS:
      return true
    case SEND_FAILURE:
      return false
    default:
      return state
  }
}

// Selectors
const getEmail = state => state.get("email")
export const getMessage = state => getEmail(state).get("message")
export const getIsSending = state => getEmail(state).get("isSending")
export const getSendFailed = state => getEmail(state).get("sendFailed")
export const getSendSucceeded = state => getEmail(state).get("sendSucceeded")

export default combineReducers({message, isSending, sendFailed, sendSucceeded})
