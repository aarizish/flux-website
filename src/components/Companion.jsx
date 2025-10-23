import React from 'react'
import { AiOutlineCloudDownload } from "react-icons/ai"
import qrCodeImage from '../assets/flux-companion-qr.png'

const Companion = () => {
  return (
    <div className="hero">
      <h1>Flux Companion</h1>

      <div className="outer">
        <div className="inner">
          <h2>Features of Flux Companion</h2>
          <p>The Flux Companion app is a mobile testing tool designed to help you develop, test, and debug API calls before integrating them into your main App Inventor project. Key features include:</p>
          <ul id='companion-features'>
            <li><strong>Test API Calls:</strong> Make GET and POST API requests with custom headers and parameters.</li>
            <li><strong>RapidAPI Support:</strong> Seamless integration with RapidAPI endpoints and easy handling of API keys.</li>
            <li><strong>Mobile Debugging:</strong> Test your API calls directly on your Android device before building your App Inventor project.</li>
            <li><strong>JSON Parsing:</strong> View and parse API responses in real-time for easy integration into your project.</li>
            <li><strong>Portable Testing:</strong> Test and refine your API integration wherever you go, directly from your mobile device.</li>
          </ul>

          <div className="download-section">
            <h3>Download Flux Companion</h3>
            <p>Get the APK to install the Flux Companion app on your Android device or emulator:</p>
            <a href="https://drive.google.com/uc?export=download&id=1uDbkoMhXTGZgQTDSSlw2a2aMRkot_8eG" download className="download-link">
              <AiOutlineCloudDownload /> Download Flux Companion APK
            </a>

            <p>Or scan the QR code to download directly to your device:</p>
            <img src={qrCodeImage} alt="Flux Companion QR Code" width="150" />

          </div>
        </div>
      </div>
    </div>
  )
}

export default Companion
