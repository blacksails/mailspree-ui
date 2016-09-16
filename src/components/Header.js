import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router"
import { Container } from "./Bootstrap"
import { isAuthenticated } from "../reducers/session"
import { logout } from "../actions/session"
import { push } from "react-router-redux"

const Header = ({ isAuthenticated, logout }) => {

  let links = []
  if (isAuthenticated) {
    links.push(
      <li key="0" className="nav-item">
        <Link to="send" className="nav-link" activeClassName="active">Send Email</Link>
      </li>
    )
    links.push(
      <li key="1" className="nav-item">
        <a className="nav-link" onClick={logout} style={{cursor: "pointer"}}>Logout</a>
      </li>
    )
  }

  return (
    <nav className="navbar navbar-dark bg-primary">
      <Container>
        <Link to="send" className="navbar-brand">mailspree.io</Link>
        <ul className="nav navbar-nav pull-xs-right">
          { links }
        </ul>
      </Container>
    </nav>
  )
}
Header.propTypes = {
  isAuthenticated: React.PropTypes.bool.isRequired,
  onLogout: React.PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  isAuthenticated: isAuthenticated(state)
})
const mapDispatchToProps = dispatch => ({
  logout: () => {
    dispatch(logout())
    dispatch(push('/login'))
  }
})

// sadly we must mark this as impure because we rely on react routers Link
export default connect(mapStateToProps, mapDispatchToProps, null, { pure: false })(Header)
