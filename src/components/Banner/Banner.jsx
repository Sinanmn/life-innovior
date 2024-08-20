import React from 'react'
import './Banner.css'

const Banner = ({text , bg_urls}) => {

    const bannerStyle ={
        backgroundImage: `url(${bg_urls})`,
    }
  return (
    <div className='bannercontainer layer' style={bannerStyle}>
      <h1>{text}</h1>
    </div>
  )
}

export default Banner
