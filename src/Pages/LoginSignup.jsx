import React from 'react'
import './CSS/LoginSignup.css'

export const LoginSignup = () => {
  return (
    <div className='loginsignup'>
        <div className="loginsignup-container">
          <h1>Sign Up</h1>
          <div className="loginsignup-fields">
            <input type="text" placeholder='Your Name' />
            <input type="email" placeholder="Email Address" id="" />
            <input type="password" placeholder='Password' />
          </div>
          <button>Continue</button>
          <p className="loginsignup-login">
            Already have and account? <span>Login here</span>
          </p>
          <div className="loginsignup-agree">
            <input type="checkbox" name='' id='' />
            <p>By Countinuing I agree to the terms of use & Privacy Policy</p>
          </div>
        </div>
    </div>
  )
}

export default LoginSignup