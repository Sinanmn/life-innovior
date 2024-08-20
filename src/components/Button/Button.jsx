import React from 'react'
import "./Button.css"

const Button = ({text, icon}) => {
  return (
   <button>{text} {icon}</button>
  )
}

export default Button
