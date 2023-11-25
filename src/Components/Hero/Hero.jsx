import React from 'react'
import './Hero.css'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'

const Hero = () => {
  return (
    <div className='hero'>

        <div className="hero-left">
            <h2>"Plantify: Where Nature Meets Your Space, One Leaf at a Time."</h2>
            <div>
                <p>BUY</p>
                <p>ALL TYPES OF</p>
                <p>PLANT</p>
            </div>
            <div>
                <div className="hero-latest-btn">
                    <div>Latest Collection</div>
                    <img src={arrow_icon} alt="" />
                </div>
            </div>
        </div>
        <div className="hero-right">
            <img src={hero_image} alt="" />
        </div>
    </div>
  )
}

export default Hero