import React from 'react'
import Banner from './../../components/Banner/Banner';
import likha from "../../assets/images/likha.jpg"
import CareerComponent from "./CareerComponent/CareerComponent.jsx"


const Career = () => {
  return (
    <div>
      <Banner text="Career & Opportunities" bg_urls={likha}></Banner>
      <CareerComponent></CareerComponent>
    </div>
  )
}

export default Career
