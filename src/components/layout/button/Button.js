import React from 'react'

const Button = (props) => {
  return (
    <button className="toggleCardsBTN " onClick={props.onClick} >
          {props.children}
        </button>
  )
}

export default Button