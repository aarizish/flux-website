import React from 'react'
import { Link } from 'react-router-dom'

const Examples = () => {
  return (
    <div className="hero">
      <h1>Examples</h1>
      
      <div className="outer">
        <div className="inner">
          <h2>Building a No-Code Dictionary App in Niotron</h2>
          <p>This example demonstrates how Flux can be used inside App Inventor distros like Niotron to make fast and efficient API calls. The tutorial walks you through building a complete dictionary app using:</p>
          <ul className='salient-features'>
            <li>Niotron’s drag-and-drop UI builder</li>
            <li>Flux extension for API calls</li>
            <li>JSONTools for parsing responses</li>
            <li>TinyDB for persistent storage</li>
          </ul>
          <p>This article shows how Flux simplifies fetching definitions from the <em>Dictionary by API Ninjas</em> API, making the app fully functional without writing traditional code.</p>

          <p>Read the full article here:{" "}
            <a href="https://www.aarizish.in/blog/no-code-dictionary-app-niotron/" target="_blank" rel="noopener noreferrer">
              Build a No-Code Dictionary App Using Niotron + Flux
            </a>
          </p>
        </div>
      </div>

      <div className="outer">
        <div className="inner">
          <h2>Submit Your App</h2>
          <p>Built something cool with Flux? We’d love to feature your app! Submit your <code>.aia</code> via the{" "} <Link to="/feedback">feedback form</Link>, and your project could appear here on the official Flux website.</p>
        </div>
      </div>
    </div>
  )
}

export default Examples
