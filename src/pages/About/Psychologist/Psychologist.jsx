import React from 'react'
import "./Psychologist.css"
import Button from "../../../components/Button/Button"
import { FaLongArrowAltRight } from "react-icons/fa";

import p1 from "../../../assets/images/p1.jpg"
import p2 from "../../../assets/images/p2.jpg"
import p3 from "../../../assets/images/p3.jpg"
import p4 from "../../../assets/images/p4.jpg"
import p5 from "../../../assets/images/p5.jpg"
import { Link } from "react-router-dom"



const Psychologist = ({hidebutton, pp1, pp2,t2, stle}) => {
   const text = "Habitant ornare bibendum dolor eu velit mollis praesent pharetra feugiat. In neque laoreet eget conubia turpis blandit etiam. Primis metus himenaeos phasellus quis vivamus tellus imperdiet nibh ligula. Venenatis magna elementum consectetuer metus sem pede dictum."
    const imgData = [
        {
            src: p1,
            size: 120,
        },
        {
            src: p2,
            size: 140,
        },
        {
            src: p3,
            size: 170,
        },
        {
            src: p4,
            size: 140,
        },
        {
            src: p5,
            size: 120,
        },

    ]
  return (
    <div className='psychologist-container'>
      <h1>
      The professional, licensed, and vetted Psychologist who you can trust</h1>
      <div className='doctors'>
        {imgData.map((item,index)=>(
            <img key={index} src={item.src} style={{
                width: `${item.size}px`,
                height: `${item.size}px`,
                marginLeft: `${index>=1?-30:0}px`
            }} />
        ))}
        
      </div>
      {pp1 &&
      <p>{text}</p>
    }
     {pp2 &&
     <p style={stle}>{t2}</p>
     }
      
      <Link to="/team" className ="link">
      {hidebutton &&
      <Button text="Meet Our Team" icon={<FaLongArrowAltRight />}></Button>
      
    }
    </Link>
    


    </div>
  )
}

export default Psychologist
