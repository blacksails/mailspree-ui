import React, { PropTypes } from "react"
import { connect } from "react-redux"
import { Container, Alert } from "./Bootstrap"
import ImmutablePropTypes from "react-immutable-proptypes"
import { changeUsername, changePassword, login } from "../actions/session"
import { getCredentials, getLoginFailed} from "../reducers/session"

const alert = error => {
  if (error) {
    return <Alert 
      type="danger"
      strong="Invalid username or password!"
      desc="Please try again..." />
  }
}
const Login = ({credentials, error, onUsernameChange, onPasswordChange, onSubmit}) => (
  <Container>
    <div className="row flex-items-xs-center flex-items-xs-middle m-t-3">
      <div className="col-xs-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
        { alert(error) }
        <div className="card">
          <div className="card-header">
            Login
          </div>
          <div className="card-block">
            <form onSubmit={onSubmit(credentials)}>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input 
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="Enter username"
                  value={credentials.username}
                  onChange={onUsernameChange}/>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input 
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter password"
                  value={credentials.password}
                  onChange={onPasswordChange}/>
              </div>
              <button type="submit" className="btn btn-primary pull-xs-right">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </Container>
)
Login.propTypes = {
  credentials: ImmutablePropTypes.map.isRequired,
  error: PropTypes.bool.isRequired,
  onUsernameChange: PropTypes.func.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  credentials: getCredentials(state),
  error: getLoginFailed(state)
})
const mapDispatchToProps = (dispatch) => ({
  onUsernameChange: (event) => dispatch(changeUsername(event.target.value)),
  onPasswordChange: (event) => dispatch(changePassword(event.target.value)),
  onSubmit: (creds) => (event) => {
    event.preventDefault()
    dispatch(login(creds))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
