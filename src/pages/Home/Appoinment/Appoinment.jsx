import React from 'react'
import './Appoinment.css'
import Button from "../../../components/Button/Button"
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom"

const Appoinment = () => {
  return (
    <div className='appoinment-container-home pd layer' >
      <h1>A healthier choice for a healthier you.</h1>
      <p>“A healthier choice for a healthier you”. Our highly trained therapists provide personalized treatment plans tailored to your needs, ensuring that you receive the support and guidance necessary to lead a happier, healthier life.</p>
      <Link to="/getAppoinment" className ="link"><Button text="Get An Appoinment" icon={<FaLongArrowAltRight /> } /></Link>
    </div>
  )
}

export default Appoinment
