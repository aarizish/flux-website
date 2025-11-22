import React from 'react'
import { AiOutlineCaretRight } from "react-icons/ai"
import apiKeyBlock from '../assets/api-key-block.png'
import apiUrlBlock from '../assets/api-url-block.png'
import callBlock from '../assets/call-block.png'
import errorBlock from '../assets/error-block.png'
import gotBlock from '../assets/got-block.png'
import headersBlock from '../assets/headers-block.png'
import methodsBlock from '../assets/method-block.png'
import paramsBlock from '../assets/params-block.png'
import exampleBlocks from '../assets/example-blocks.png'

const Docs = () => {
  return (
    <>
      <div className="hero">
        <h1>Using Flux<br />in App Inventor</h1>
        <div className="outer">
          <div className="inner">
            <h2>Overview</h2>
            <p>
              Flux is an App Inventor extension for making HTTP API requests using <strong>GET</strong> or <strong>POST</strong> methods. You can dynamically set API keys, custom headers, query parameters, and retrieve JSON responses, all without writing backend code.
            </p>
          </div>

          <div className="inner">
            <h2>Available Blocks</h2>
            <ul className='docs-list' style={{ textAlign: 'left', lineHeight: '2rem' }}>
              <li>
                <img src={apiKeyBlock} alt="API Key Block" width="300" />
                <br />
                <strong>SetApiKey(text)</strong>: Set your API or RapidAPI key.
              </li>
              <li>
                <img src={apiUrlBlock} alt="API URL Block" width="300" />
                <br />
                <strong>SetApiUrl(text)</strong>: Full API endpoint (e.g., <code>https://example.com/api</code>).
              </li>
              <li>
                <img src={headersBlock} alt="API URL Block" width="300" />
                <br />
                <strong>SetHeaders(json)</strong>: (Optional) headers in JSON string (e.g., <code>{'{ "x-rapidapi-host": "xyz" }'}</code>).
              </li>
              <li>
                <img src={paramsBlock} alt="API URL Block" width="300" />
                <br />
                <strong>SetParameters(query)</strong>: (Optional) query parameters (e.g., <code>limit=1&lang=en</code>).
              </li>
              <li>
                <img src={methodsBlock} alt="API URL Block" width="300" />
                <br />
                <strong>SetRequestMethod("GET" or "POST")</strong>: HTTP method (default: <code>GET</code>).
              </li>
              <li>
                <img src={callBlock} alt="API URL Block" width="300" />
                <br />
                <strong>MakeApiCall()</strong>: Executes the API request.
              </li>
              <li>
                <img src={gotBlock} alt="API URL Block" width="300" />
                <br />
                <strong>GotResponse(text)</strong>: Event triggered when the request succeeds.
              </li>
              <li>
                <img src={errorBlock} alt="API URL Block" width="300" />
                <br />
                <strong>Error(text)</strong>: Event triggered when something goes wrong.
              </li>
            </ul>
          </div>

          <div className="inner">
            <h2>Example</h2>
            <p>Here's how you can make a GET request to the <strong>Facts API</strong> from RapidAPI:</p>
            <img src={exampleBlocks} alt="API URL Block" width="700" />
            <p>Use the <code>GotResponse</code> block to display or parse the response JSON in your app.</p>
          </div>

          <div className="inner">
            <h2>Ethical Use Notice</h2>
            <p>
              This extension is created strictly for <strong>halal, ethical, moral, and legal purposes only</strong>.
              It should not be used to support or enable any content or behavior that involves:
            </p>
            <ul style={{ textAlign: 'left', lineHeight: '2rem' }}>
              <li>Nudity, pornography, or adult content</li>
              <li>Gambling, betting, or financial speculation tools</li>
              <li>Alcohol, drugs, or intoxicants</li>
              <li>Hate, harassment, or exploitation</li>
              <li>Harmful, exploitative, or deceptive services</li>
              <li>Misinformation or illegal activity</li>
              <li>Unauthorized data collection or privacy violations</li>
            </ul>
            <p>Let's build healthy, meaningful, good, and helpful software. Always.</p>
          </div>

          <div className="inner">
            <h2>Need More?</h2>
            <p>
              Explore our <a href="/examples">Examples</a>, try the <a href="/companion">Flux Companion App</a>, or <a href="/feedback">send feedback</a>.
            </p>
            <p>
              Want to improve this doc or help others? <a href="/contribute">Contribute to Flux <AiOutlineCaretRight /></a>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Docs
