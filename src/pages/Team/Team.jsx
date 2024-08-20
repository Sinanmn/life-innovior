import React from 'react'
import Banner from "../../components/Banner/Banner"
import handshake from "../../assets/images/handshake.jpg"
import Psycologist from "../About/Psychologist/Psychologist.jsx"
import MeetTheTeam from './MeetTheTeam/MeetTheTeam.jsx'
import IfYouCanLaugh from './IfYouCanLaugh/IfYouCanLaugh.jsx'
import Appoinment from "../Home/Appoinment/Appoinment.jsx"
const Team = () => {
  const stl = {
    color: "#7A7A7A"
  }
  const text ="Our team comprises experienced and qualified mental health professionals who are passionate about helping individuals improve their mental wellbeing. We have a diverse team of psychologists, counselors, and therapists who specialize in various areas such as depression, anxiety, trauma, and addiction. Our team is dedicated to providing personalized and evidence-based treatments to our clients in a safe and confidential environment. We believe that everyone deserves to live a healthy and fulfilling life, and we are committed to supporting individuals in achieving their mental health goals."
  return (
    <div>
      <Banner text="Team" bg_urls={handshake}></Banner>
      <Psycologist hidebutton={false} pp2={true} pp1={false} t2 = {text} stle={stl}></Psycologist>
      <MeetTheTeam></MeetTheTeam>
      <IfYouCanLaugh></IfYouCanLaugh>
      <Appoinment></Appoinment>
    </div>
  )
}

export default Team
