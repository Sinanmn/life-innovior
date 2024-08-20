import React from 'react'
import "./Card.css"

const Card = ({src, text}) => {
  return (
    <div className="card">
          <div className="card_image">
          <img src={src} alt="" />
          </div>
          <p>{text}</p>
        </div>
  )
}

export default Card
