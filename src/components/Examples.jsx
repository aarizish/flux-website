import React from 'react'
import { Link } from 'react-router-dom'

const Examples = () => {
  return (
    <div className="hero">
      <h1>Coming Soon!</h1>
      
      <div className="outer">
        <div className="inner">
          <h2>Build Your Apps with Flux</h2>
          <p>We’re working on adding some amazing app examples to demonstrate the power of Flux in App Inventor.</p>
          <p>If you'd like to have your app featured here, simply build your app with Flux, submit your `.aia` file via the <Link to="/feedback">feedback form</Link>, and we'll showcase your app on the official Flux website!</p>
          <p>Stay tuned for more!</p>
        </div>
      </div>
    </div>
  )
}

export default Examples
