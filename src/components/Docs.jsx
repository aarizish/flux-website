import React from 'react'
import { AiOutlineCaretRight } from "react-icons/ai"

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
            <ul style={{ textAlign: 'left', lineHeight: '2rem' }}>
              <li><strong>SetApiKey(text)</strong>: Set your API or RapidAPI key.</li>
              <li><strong>SetApiUrl(text)</strong>: Full API endpoint (e.g., <code>https://example.com/api</code>).</li>
              <li><strong>SetHeaders(json)</strong>: Optional headers in JSON string (e.g., <code>{'{ "x-rapidapi-host": "xyz" }'}</code>).</li>
              <li><strong>SetParameters(query)</strong>: Optional query parameters (e.g., <code>limit=1&lang=en</code>).</li>
              <li><strong>SetRequestMethod("GET" or "POST")</strong>: HTTP method (default: <code>GET</code>).</li>
              <li><strong>MakeApiCall()</strong>: Executes the API request.</li>
              <li><strong>GotResponse(text)</strong>: Event triggered when the request succeeds.</li>
              <li><strong>Error(text)</strong>: Event triggered when something goes wrong.</li>
            </ul>
          </div>

          <div className="inner">
            <h2>Example</h2>
            <p>Here's how you can make a GET request to the <strong>Facts API</strong> from RapidAPI:</p>
            <pre style={{ textAlign: 'left', backgroundColor: '#f5f5f7', padding: '20px', borderRadius: '12px' }}>
{`SetApiKey("your-rapidapi-key")
SetApiUrl("https://facts-by-api-ninjas.p.rapidapi.com/v1/facts")
SetHeaders("{\"x-rapidapi-host\": \"facts-by-api-ninjas.p.rapidapi.com\"}")
SetParameters("limit=1")
SetRequestMethod("GET")
MakeApiCall()`}
            </pre>
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
