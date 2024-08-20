import React from 'react'
import Button from "../../../components/Button/Button.jsx"
import "./GetStarted.css"
import { Link } from "react-router-dom"

const GetStarted = () => {
  return (
    <div className='banner layer'>
      <h1>Be Happy<br/>Keep Happy</h1>
      <p>Happiness is a decision, not an outcome of chance. The right principles must be followed through consistent practices in order to be happy and lead a meaningful life.</p>
      <Link to="/contact" className='link'><Button text="Get Started"></Button></Link>
    </div>
  )
}

export default GetStarted
