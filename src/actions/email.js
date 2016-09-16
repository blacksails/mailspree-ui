import { endpoint } from "../config"

const send = endpoint() + "/send"

// Action types
export const CHANGE_EMAIL = "CHANGE_EMAIL"
export const SEND_START = "SEND_START"
export const SEND_EMAIL = "SEND_EMAIL"
export const SEND_SUCCESS = "SEND_SUCCESS"
export const SEND_FAILURE = "SEND_FAILURE"
export const SEND_FAILURE_HIDE = "SEND_FAILURE_HIDE"

// Sync action creators
export const changeEmail = (field, value) => ({
  "type": CHANGE_EMAIL,
  "field": field,
  "value": value
})

const startSending = () => ({"type": SEND_START})
const sendSuccess = () => ({"type": SEND_SUCCESS})
const sendFailure = () => ({"type": SEND_FAILURE})
const hideSendFailure = () => ({"type": SEND_FAILURE_HIDE})

// Async action creators
const sendError = () => dispatch => {
  dispatch(sendFailure())
  setTimeout(() => dispatch(hideSendFailure()), 3000)
}

export const sendEmail = (message, token) => {
  const config = {
    method: 'POST',
    mode: 'cors',
    headers: new Headers({
      "Authorization": `Bearer ${token}`
    }),
    body: JSON.stringify({
      to: [{
        address: message.get("to")
      }],
      from: {
        address: message.get("from")
      },
      subject: message.get("subject"),
      body: message.get("body")
    })
  }
  return (dispatch) => {
    dispatch(startSending())
    return fetch(send, config)
      .then(res => {
        if (!res.ok) {
          dispatch(sendError())
          return
        }
        dispatch(sendSuccess())
      })
      .catch(err => {
        console.log("Fetch error: " + err)
        dispatch(sendError())
      })
  }
}
