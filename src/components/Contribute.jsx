import React from 'react'
import { AiOutlineGithub, AiOutlineCaretRight } from "react-icons/ai"

const Contribute = () => {
  return (
    <>
      <div className="hero">
        <h1>Contribute to Flux</h1>
        <div className="outer">

          <div className="inner">
            <h2>Welcome, Contributors!</h2>
            <p>
              Thank you for your interest in helping build <strong>Flux</strong>, a lightweight, powerful API extension for App Inventor platforms. Whether you're a developer, tester, translator, or writer, your help is valued!
            </p>
            <p>Choose the repo relevant to your contribution:</p>
            <div className="contribute-links">
            <ul style={{ textAlign: 'left', lineHeight: '2rem' }}>
              <li>
                <strong>Flux Extension (Java API extension): </strong>
                <a href="https://github.com/aarizish/flux-extension" target="_blank" rel="noopener noreferrer">
                  github.com/aarizish/flux-extension <AiOutlineGithub />
                </a>
              </li>
              <li>
                <strong>Flux Companion (Capacitor + Ionic + React app): </strong>
                <a href="https://github.com/aarizish/flux-companion" target="_blank" rel="noopener noreferrer">
                  github.com/aarizish/flux-companion <AiOutlineGithub />
                </a>
              </li>
              <li>
                <strong>Flux Website, Docs and Examples: </strong>
                <a href="https://github.com/aarizish/flux-website" target="_blank" rel="noopener noreferrer">
                  github.com/aarizish/flux-website <AiOutlineGithub />
                </a>
              </li>
            </ul>
            </div>
          </div>

          <div className="inner">
            <h2>Code of Conduct</h2>
            <p>
              This project is built and maintained strictly for <strong>halal, ethical, moral, and legal purposes only</strong>. By contributing, you agree <strong>not</strong> to suggest or add features that support:
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
            <p>Let’s build tools that benefit and never harm.</p>
          </div>

          <div className="inner">
            <h2>How to Contribute to Flux Extension</h2>
            <ol style={{ textAlign: 'left', lineHeight: '2rem' }}>
              <li>
                <strong>Fork the Repo</strong> on GitHub:&nbsp;
                <a href="https://github.com/aarizish/flux-extension" target="_blank" rel="noopener noreferrer">
                  github.com/aarizish/flux-extension <AiOutlineCaretRight />
                </a>
              </li>
              <li>
                <strong>Clone your fork</strong><br />
                <code>git clone https://github.com/your-username/flux-extension.git</code>
              </li>
              <li>
                <strong>Create a feature branch</strong><br />
                <code>git checkout -b your-feature-name</code>
              </li>
              <li>
                <strong>Make your changes</strong><br />
                Edit <code>src/in/aarizish/flux/Flux.java</code>.
              </li>
              <li>
                <strong>Commit and push</strong><br />
                <code>git add .</code><br />
                <code>git commit -m "Describe your change"</code><br />
                <code>git push origin your-feature-name</code>
              </li>
              <li>
                <strong>Create a pull request</strong> on GitHub with a clear summary.
              </li>
            </ol>
          </div>

          <div className="inner">
            <h2>How to Contribute to Flux Companion &amp; Website</h2>
            <p>
              For contributions to the Flux Companion app (React + Ionic + Capacitor) or the website/documentation/examples (React + Vite), please refer to their respective repositories:
            </p>
            <div className="contribute-links">
            <ul style={{ textAlign: 'left', lineHeight: '2rem' }}>
              <li>
                <strong>Flux Companion: </strong> 
                <a href="https://github.com/aarizish/flux-companion" target="_blank" rel="noopener noreferrer">
                  github.com/aarizish/flux-companion <AiOutlineGithub />
                </a>
              </li>
              <li>
                <strong>Flux Website, Docs &amp; Examples: </strong> 
                <a href="https://github.com/aarizish/flux-website" target="_blank" rel="noopener noreferrer">
                  github.com/aarizish/flux-website <AiOutlineGithub />
                </a>
              </li>
            </ul>
            </div>
            <p>
              Fork, clone, and submit pull requests as usual. Make sure your changes build and run successfully.
            </p>
          </div>

          <div className="inner">
            <h2>Contribution Guidelines</h2>
            <ul style={{ textAlign: 'left', lineHeight: '2rem' }}>
              <li>Document your code with inline comments.</li>
              <li>Keep code reusable and avoid hardcoding APIs.</li>
              <li>Follow the existing folder and naming structure.</li>
              <li>Ensure code builds successfully (Niotron IDE for Extension; standard Vite build for Companion and Website).</li>
              <li>Place all `.jar` dependencies inside <code>/lib</code> (for Extension only).</li>
            </ul>
          </div>

          <div className="inner">
            <h2>Good First Ideas</h2>
            <ul style={{ textAlign: 'left', lineHeight: '2rem' }}>
              <li>Support POST with raw JSON payload</li>
              <li>Add timeout or retry configuration</li>
              <li>Improve error output (status, headers)</li>
              <li>Add block examples or visuals</li>
              <li>Translate docs into other languages</li>
              <li>Improve UI/UX of Flux Companion app</li>
              <li>Enhance website documentation and accessibility</li>
            </ul>
          </div>

          <div className="inner">
            <h2>License</h2>
            <p>
              By contributing, you agree that your contributions will be licensed under the same <a target='_blank' href="https://github.com/aarizish/flux-extension/blob/main/LICENSE">MIT License</a> as the main project.
            </p>
            <p>
              This project exists to bring benefit, not harm, and your contributions help make that possible.
            </p>
          </div>

          <div className="inner">
            <h2>Thank You</h2>
            <p>
              Every line of code, every issue reported, every doc edit, it all counts. Thank you for being part of Flux.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contribute
