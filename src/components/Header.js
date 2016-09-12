import React from "react"
import { Container } from "./Bootstrap"

const Header = () => (
  <nav className="navbar navbar-dark bg-primary">
    <Container>
      <a className="navbar-brand">mailspree.io</a>
      <ul className="nav navbar-nav pull-xs-right">
        <li className="nav-item active">
          <a className="nav-link">Send Email</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">Log out</a>
        </li>
      </ul>
    </Container>
  </nav>
)

export default Header
