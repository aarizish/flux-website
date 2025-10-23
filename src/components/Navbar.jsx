import React from 'react'
import { AiFillAndroid } from "react-icons/ai";
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>
        <div className="navbar">
            <ul>
                <Link to='/'><li id='logo'><AiFillAndroid /></li></Link>
                <Link to='/docs'><li>Docs</li></Link>
                <a href='https://drive.google.com/uc?export=download&id=1gzdWoOPi7voMCLppGxiZoNLEVQY4wsSV'><li>Download</li></a>
                <Link to='/examples'><li>Examples</li></Link>
                <Link to='/companion'><li>Companion</li></Link>
                <Link to='/contribute'><li>Contribute</li></Link>
                <Link to='/feedback'><li>Feedback</li></Link>
            </ul>
        </div>
    </>
  )
}

export default Navbar