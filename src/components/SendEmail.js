import React, { PropTypes }from "react"
import { Container, Row } from "./Bootstrap"
import { connect } from "react-redux"
import ImmutablePropTypes from "react-immutable-proptypes"
import { changeEmail, sendEmail } from "../actions/email"
import { getMessage, getSendFailed, getSendSucceeded } from "../reducers/email"
import { getToken } from "../reducers/session"
import { Alert } from "./Bootstrap"

const alertError = error => {
  if (error) {
    return <Alert 
      type="danger"
      strong="Unfortunately there was a problem sending your email!"
      desc="Please try again..." />
  }
}
const alertSuccess = success => {
  if (success) {
    return <Alert 
      type="success"
      strong="Your email was sent!"
      desc="Now let's send another one" />
  }
}
const SendEmail = ({ message, error, success, token, onEmailChange, onEmailSubmit }) => (
  <Container>
    <Row>
      <div className="col-xs">
        <h1 className="display-4 text-xs-center m-t-1 m-b-2">Let's get on a mailingspree!</h1>
        <p className="lead text-xs-center m-b-3">
          Fill out the email below to get started.
        </p>
        { alertError(error) }
        { alertSuccess(success) }
        <h3>Email</h3>
        <form onSubmit={onEmailSubmit(message, token)}>
          <div className="form-group">
            <label htmlFor="to">To</label>
            <input
              type="email" 
              className="form-control" 
              id="to"
              placeholder="Enter email"
              value={message.get("to")}
              onChange={onEmailChange("to")}/>
          </div>
          <div className="form-group">
            <label htmlFor="from">From</label>
            <input 
              type="email"
              className="form-control"
              id="from"
              placeholder="Enter email"
              value={message.get("from")}
              onChange={onEmailChange("from")}/>
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              className="form-control"
              id="subject"
              placeholder="Enter subject"
              value={message.get("subject")}
              onChange={onEmailChange("subject")}/>
          </div>
          <div className="form-group">
            <label htmlFor="body">Message</label>
            <textarea 
              rows="10"
              className="form-control"
              id="body"
              placeholder="Enter message"
              value={message.get("body")}
              onChange={onEmailChange("body")}/>
          </div>
          <button type="submit" className="btn btn-primary pull-xs-right">Send</button>
        </form>
      </div>
    </Row>
  </Container>
)
SendEmail.propTypes = {
  message: ImmutablePropTypes.map.isRequired,
  error: PropTypes.bool.isRequired,
  success: PropTypes.bool.isRequired,
  token: PropTypes.string.isRequired,
  onEmailChange: PropTypes.func.isRequired,
  onEmailSubmit: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  message: getMessage(state),
  error: getSendFailed(state),
  success: getSendSucceeded(state),
  token: getToken(state),
})
const mapDispatchToProps = (dispatch) => ({
  onEmailChange(field) {
    return (event) => dispatch(changeEmail(field, event.target.value))
  },
  onEmailSubmit(message, token) {
    return (event) => {
      event.preventDefault()
      dispatch(sendEmail(message, token))
    }
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SendEmail)
