import React from 'react'
import Banner from './../../components/Banner/Banner.jsx';
import sofa2 from "../../assets/images/sofa2.jpg"
import Appoinment from '../../components/Appoinment/Appoinment.jsx';
import sofa from "../../assets/images/sofa.jpg"
import ContactComponent from './ContactComponent/ContactComponent.jsx';
const Contact = () => {
  const h1 = "The best counseling from the best psychologists."
  const p1 = "Our team is made up of highly trained and experienced mental health professionals who are dedicated to providing the highest quality care to our clients."
  return (
    <div>
     <Banner text="Contact Us" bg_urls={sofa2}></Banner>
     <br /><br /><br /><br />
     <Appoinment bg={sofa} h1text={h1} ptext={p1}></Appoinment>
     <ContactComponent></ContactComponent>
    </div>
  )
}

export default Contact
