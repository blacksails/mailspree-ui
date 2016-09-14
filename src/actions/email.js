// Action types
export const CHANGE_EMAIL = "CHANGE_EMAIL"

// Action creators
export const changeEmail = (field, value) => ({
  "type": CHANGE_EMAIL,
  "field": field,
  "value": value
})
