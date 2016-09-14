import { CHANGE_EMAIL } from "../actions/email"
import Immutable from "immutable"

const emptyEmail = Immutable.Map({
  "to": "",
  "from": "",
  "subject": "",
  "body": "",
})

const email = (state = emptyEmail, action) => {
  switch (action.type) {
    case CHANGE_EMAIL:
      return state.set(action.field, action.value)
    default:
      return state;
  }
}

export default email
