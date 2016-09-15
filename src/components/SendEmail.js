import React, { PropTypes }from "react"
import { Container, Row } from "./Bootstrap"
import { connect } from "react-redux"
import ImmutablePropTypes from "react-immutable-proptypes"
import { changeEmail } from "../actions/email"
import { getEmail } from "../reducers/email"

const SendEmail = ({ email, onEmailChange }) => (
  <Container>
    <Row>
      <div className="col-xs">
        <h1 className="display-4 text-xs-center m-t-1 m-b-2">Let's get on a mailingspree!</h1>
        <p className="lead text-xs-center m-b-3">
          Fill out the email below to get started.
        </p>
        <h3>Email</h3>
        <form>
          <div className="form-group">
            <label htmlFor="to">To</label>
            <input
              type="email" 
              className="form-control" 
              id="to"
              placeholder="Enter email"
              value={email.get("to")}
              onChange={onEmailChange("to")}/>
          </div>
          <div className="form-group">
            <label htmlFor="from">From</label>
            <input 
              type="email"
              className="form-control"
              id="from"
              placeholder="Enter email"
              value={email.get("from")}
              onChange={onEmailChange("from")}/>
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              className="form-control"
              id="subject"
              placeholder="Enter subject"
              value={email.get("subject")}
              onChange={onEmailChange("subject")}/>
          </div>
          <div className="form-group">
            <label htmlFor="body">Message</label>
            <textarea 
              rows="10"
              className="form-control"
              id="body"
              placeholder="Enter message"
              value={email.get("body")}
              onChange={onEmailChange("body")}/>
          </div>
          <button type="submit" className="btn btn-primary pull-xs-right">Send</button>
        </form>
      </div>
    </Row>
  </Container>
)
SendEmail.propTypes = {
  email: ImmutablePropTypes.map.isRequired,
  onEmailChange: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  email: getEmail(state)
})
const mapDispatchToProps = (dispatch) => ({
  onEmailChange(field) {
    return (event) => dispatch(changeEmail(field, event.target.value))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SendEmail)
