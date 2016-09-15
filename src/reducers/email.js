import { CHANGE_EMAIL } from "../actions/email"
import Immutable from "immutable"

// Initial state
const emptyEmail = Immutable.Map({
  "to": "",
  "from": "",
  "subject": "",
  "body": "",
})

// Reducers
const email = (state = emptyEmail, action) => {
  switch (action.type) {
    case CHANGE_EMAIL:
      return state.set(action.field, action.value)
    default:
      return state
  }
}

// Selectors
export const getEmail = state => state.get("email")

export default email
