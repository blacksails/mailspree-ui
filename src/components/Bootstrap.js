import React from "react"

export const Container = (props) => (
  <div className="container">
    {props.children}
  </div>
)

export const Row = (props) => (
  <div className="row">
    {props.children}
  </div>
)

export const Alert = ({type, strong, desc}) => (
  <div className={"alert alert-" + type} role="alert">
    <strong>{strong}</strong> {desc}
  </div>
)
Alert.propTypes = {
  type: React.PropTypes.string,
  strong: React.PropTypes.string,
  desc: React.PropTypes.string
}
Alert.defaultProps = {
  type: "info"
}
