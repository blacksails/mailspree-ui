import React from "react"
import { Container, Row } from "./Bootstrap"
import styles from "./Footer.scss"

const Footer = (props) => (
  <div className={"bg-faded " + styles.footer}>
    <Container>
      <Row>
        <div className="col-xs-12 text-xs-center">
          <small>
            Copyright &copy; 2016 Benjamin Nørgaard.
            {' '}<a href="https://github.com/blacksails/mailspree-ui">Github</a>
          </small>
        </div>
      </Row>
    </Container>
  </div>
)

export default Footer
