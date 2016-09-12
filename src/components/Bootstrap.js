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
