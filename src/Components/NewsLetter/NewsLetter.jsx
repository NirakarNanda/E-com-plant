import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get exclusive Offers On Your Email</h1>
        <p>Subscribe to our newsletter and stay connected and updated</p>
        <div>
            <input type="mail" placeholder='Your Email id' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter