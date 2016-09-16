import { LOCATION_CHANGE } from "react-router-redux"
import Immutable from "immutable"

const initialRouterState = Immutable.fromJS({
  locationBeforeTransitions: null
})
const routing = (state = initialRouterState, action) => {
  if (action.type === LOCATION_CHANGE) {
    return state.merge({
      locationBeforeTransitions: action.payload
    })
  }
  return state
}

export default routing
