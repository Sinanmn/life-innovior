import React from 'react'
import './Testimonial.css'
import { LuQuote } from "react-icons/lu";
import p1 from "../../../assets/images/p1.jpg"
import p2 from "../../../assets/images/p2.jpg"
import p3 from "../../../assets/images/p3.jpg"



const Testimonial = () => {
const clientData  = [
  {
    src: p1,
    description:'Ut aenean ipsum pharetra risus ultricies rhoncus imperdiet. Tempor velit nullam blandit leo aliquet vulputate habitasse tincidunt. Dictumst placerat ac donec.',
    name: 'Sinan',
    designation: 'Student'

  },
  {
    src: p2,
    description:'Ut aenean ipsum pharetra risus ultricies rhoncus imperdiet. Tempor velit nullam blandit leo aliquet vulputate habitasse tincidunt. Dictumst placerat ac donec.',
    name: 'Rahima',
    designation: 'Teacher'

  },
  {
    src: p3,
    description:'Ut aenean ipsum pharetra risus ultricies rhoncus imperdiet. Tempor velit nullam blandit leo aliquet vulputate habitasse tincidunt. Dictumst placerat ac donec.',
    name: 'Nahian',
    designation: 'Reporter'

  }
]

  return (
    <div className='testimonial_container pd'>
      <h4>testimonial</h4>
      <h1>What They Say About Us</h1>
      <div className="client-container">

      {clientData.map((item,index)=>(
         <div className="client-card" key={index}>
         <LuQuote className='client-icon'/>
         <p>{item.description}</p>
         <div className="client-gol">
           <img src={item.src} />
           <h5>{item.name}</h5>
           <p>{item.designation}</p>
         </div>
         </div>
      ))}

       


      


      

      </div>
    </div>
  )
}

export default Testimonial
