import React from 'react'
import uncomfortable from "../../../assets/images/uncomfortable.jpg"
import "./WhoWeAre.css"

const WhoWeAre = () => {
  return (
    <div className='whoweare_container pd' >
      <div className="left">
        <h4>WHO WE ARE</h4>
        <h1>Metal Health Service-No more feeling uncomfortable.</h1>
        <p>Lifeinnovior is a mental health service provider and a CSR Initiative of Goinnovior Limited. Our mission is to promote peace, order, and meaning in people’s lives by conducting research on mental health and raising public awareness of its importance. We believe that mental health is as essential as physical health and that caring for one’s mental health is crucial for individual and societal development.</p>
        <br/>
        <p>We strive to provide quality mental health services to individuals, corporations, and communities. Our team of mental health professionals is committed to improving the lives of our clients through therapy, counseling, and other interventions. At Lifeinnovior, we are dedicated to creating a world where mental health is valued and prioritized, and where everyone has access to the support they need to live healthy, fulfilling lives.</p>

      </div>
      <div className="right">
        <img src={uncomfortable} />
        <div className='right-box'>
          <h1>5+</h1>
          <p>Years Experience</p>
          </div>
      </div>
    </div>
  )
}

export default WhoWeAre
