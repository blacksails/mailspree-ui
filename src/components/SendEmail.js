import React from "react"
import { Container, Row } from "./Bootstrap"

const SendEmail = () => (
  <Container>
    <Row>
      <div className="col-xs-12">
        <h1 className="display-4 text-xs-center m-t-1 m-b-2">Let's get on a mailingspree!</h1>
        <p className="lead text-xs-center m-b-3">
          Fill out the email below to get started.
        </p>
        <h3>Email</h3>
        <form>
          <div className="form-group">
            <label htmlFor="to">To</label>
            <input type="email" className="form-control" id="to" placeholder="Enter email"/>
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" className="form-control" id="subject" placeholder="Enter subject"/>
          </div>
          <div className="form-group">
            <label htmlFor="body">Message</label>
            <textarea rows="10" className="form-control" id="body" placeholder="Enter message"/>
          </div>
          <button type="submit" className="btn btn-primary pull-xs-right">Send</button>
        </form>
      </div>
    </Row>
  </Container>
)

export default SendEmail
