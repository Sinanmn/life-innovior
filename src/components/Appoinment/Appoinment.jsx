import React from 'react'
import './Appoinment.css'
import Button from "../Button/Button"
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom"

const Appoinment = ({bg,h1text,ptext}) => {

  return (
    <div className='appoinment-container-component pd layer' style={{
      backgroundImage: `url(${bg})`,
    }}>
      <h1>{h1text}</h1>
      <p>{ptext}</p>
      <Link to="/getAppoinment" className ="link">
      <Button text="Get An Appoinment" icon={<FaLongArrowAltRight />}/>
      </Link>
    </div>
  )
}

export default Appoinment
