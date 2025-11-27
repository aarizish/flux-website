import React from "react";

const Privacy = () => {
  return (
    <>
      <div className="hero">
        <h1>Flux Companion<br />Privacy Policy</h1>

        <div className="outer">

          <div className="inner">
            <h2>Introduction</h2>
            <p>
              This Privacy Policy explains how Flux Companion handles your data.
              Flux Companion is a local API testing utility for Android devices.
              It does not collect, store, or transmit any personal information.
            </p>
            <p>
              The app functions entirely on-device and does not require any
              account, login, analytics, or cloud connectivity for its core
              features.
            </p>
          </div>

          <div className="inner">
            <h2>What Flux Companion Collects</h2>
            <p>
              Flux Companion does <strong>not</strong> collect or transmit any user
              data. Specifically, the app does not gather:
            </p>

            <ul className="docs-list">
              <li>Personal information</li>
              <li>Device identifiers</li>
              <li>Location data</li>
              <li>Usage or analytics data</li>
              <li>API content or request bodies</li>
              <li>Background activity or logs</li>
            </ul>

            <p>
              Flux Companion contains no backend and no cloud services. It cannot
              upload information to any server other than the API endpoints you
              intentionally connect to.
            </p>
          </div>

          <div className="inner">
            <h2>Local Data Storage</h2>
            <p>
              Certain optional data—such as request history, headers, or parameters—
              may be stored <strong>locally on your device</strong> to improve
              usability.
            </p>
            <p>
              This information remains fully on your device and never leaves it.
              Clearing the app data or uninstalling the app permanently removes
              everything.
            </p>
          </div>

          <div className="inner">
            <h2>Your API Requests</h2>
            <p>
              Flux Companion sends API requests only to the endpoints that you
              manually specify. The app does not intercept, store, analyze, or
              transmit these requests or responses.
            </p>
            <p>
              Any data sent to third-party services is governed by their
              respective privacy policies. Flux Companion is not responsible for
              how external APIs handle or store that data.
            </p>
          </div>

          <div className="inner">
            <h2>No Third-Party Services</h2>
            <p>
              Flux Companion does not integrate or communicate with any
              third-party SDKs, including:
            </p>

            <ul className="docs-list">
              <li>Google Analytics</li>
              <li>Firebase Analytics</li>
              <li>Crashlytics</li>
              <li>AdMob or advertising platforms</li>
              <li>Facebook SDK</li>
              <li>Telemetry or tracking services</li>
            </ul>

            <p>
              The app contains no tracking, analytics, ads, or external data
              pipelines of any kind.
            </p>
          </div>

          <div className="inner">
            <h2>Your Rights</h2>
            <p>
              Because Flux Companion does not collect or store personal data:
            </p>

            <ul className="docs-list">
              <li>No personal data is retained</li>
              <li>No data is stored on servers</li>
              <li>No data is available to export</li>
              <li>No deletion requests are necessary</li>
            </ul>

            <p>
              All information remains on your device, under your complete control.
            </p>
          </div>

          <div className="inner">
            <h2>Questions or Support</h2>
            <p>
              If you have questions or suggestions, you may contact the developer
              through the official Flux website’s feedback form or at:
            </p>
            <p><strong><a href="https://www.aarizish.in/contact/">aarizish.in/contact</a></strong></p>
          </div>

        </div>
      </div>
    </>
  );
};

export default Privacy;
