import React, { Fragment } from 'react'

const Form = (props) => {
  return (
    <form>{props.children}</form>
  )
}
const Controller = (props) => {
  return (
    <div>
      {props.children}
    </div>
  )
}
Form.Controller = Controller

export default Form
