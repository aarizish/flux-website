import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
        <div className="footer">
            <div className="left">
                <p>Copyright (c) 2025 Flux. All rights reserved.</p>
            </div>
            <div className="center">
                <ul>
                    <Link to='/docs'><li>Docs</li></Link>
                    <Link to='https://drive.google.com/uc?export=download&id=1gzdWoOPi7voMCLppGxiZoNLEVQY4wsSV'><li>Download</li></Link>
                    <Link to='/examples'><li>Examples</li></Link>
                    <Link to='/companion'><li>Companion</li></Link>
                    <Link to='/contribute'><li>Contribute</li></Link>
                    <Link to='/feedback'><li>Feedback</li></Link>
                </ul>
            </div>
            <div className="right">
                <a href='https://www.aarizish.in/' target='_blank'>Aarizish</a>
            </div>
        </div>
    </>
  )
}

export default Footer