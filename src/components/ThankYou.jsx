import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineArrowLeft } from "react-icons/ai"

const ThankYou = () => {
  return (
    <div className="hero">
      <h1>Thank You!</h1>
      
      <div className="outer">
        <div className="inner">
          <h2>Message Sent</h2>
          <p>We appreciate your feedback and will get back to you if necessary. Thanks for helping us make Flux better.</p>
          
          <Link to="/"><AiOutlineArrowLeft /> Back to Home</Link>
        </div>
      </div>
    </div>
  )
}

export default ThankYou
