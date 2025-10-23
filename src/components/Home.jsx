import React from 'react'
import { AiOutlineCloudDownload, AiOutlineCaretRight } from "react-icons/ai"
import fluxHero from "../assets/flux-hero.png"
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
        <div className="hero">
            <h1>If there's an endpoint,<br/>there's a Flux way.</h1>
            <div className="outer">
                <div className="inner">
                    <h2>API Requests Simplified</h2>
                    <p>Flux simplifies API calls by managing API keys, headers, and parameters. With native RapidAPI support, it retrieves and parses JSON data seamlessly, streamlining integration for faster app development.</p>
                    <a href='https://drive.google.com/uc?export=download&id=1gzdWoOPi7voMCLppGxiZoNLEVQY4wsSV'>Download Flux.aix <AiOutlineCloudDownload /></a>
                    <div>
                        <img src={fluxHero} width='80%' />
                    </div>
                </div>
                <div className="inner">
                    <h2>Flux Companion</h2>
                    <p>A mobile testing app built as a playground. Use it to test APIs, headers, and parameters before integrating into your main App Inventor project. Perfect for development on the go.</p>
                    <a href='/companion'>Download Flux Companion <AiOutlineCaretRight /></a>
                </div>
                <div className="inner">
                    <h2>Contributing to Flux</h2>
                    <p>Thank you for your interest in contributing to Flux, a lightweight, powerful API client for App Inventor platforms. We welcome developers, testers, writers, and anyone who wants to help improve the project.</p>
                    <Link to='/contribute'>How to Contribute <AiOutlineCaretRight /></Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home