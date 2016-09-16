import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router"
import { Container } from "./Bootstrap"
import { isAuthenticated } from "../reducers/session"

const Header = ({ isAuthenticated }) => {

  let links = []
  if (isAuthenticated) {
    links.push(
      <li key="0" className="nav-item">
        <Link to="send" className="nav-link" activeClassName="active">Send Email</Link>
      </li>
    )
    /* TODO: implement logout
     *links.push(
     *  <li className="nav-item">
     *    <a className="nav-link">Log out</a>
     *  </li>
     *)
     */
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

const mapStateToProps = state => ({
  isAuthenticated: isAuthenticated(state)
})

// sadly we must mark this as impure because we rely on react routers Link
export default connect(mapStateToProps, null, null, { pure: false })(Header)
