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
              “Does this app secretly spy on me?” they asked.<br />
              “Not even close,” I replied.
            </p>
            <p>
              Flux Companion is a tiny utility designed to help you test HTTP API calls
              on your Android device. No accounts, no tracking, no analytics, no
              nonsense. Just clean, direct API testing.
            </p>
          </div>

          <div className="inner">
            <h2>What Flux Companion Collects</h2>
            <p>
              Let’s make this very clear: <strong>Flux Companion collects nothing.</strong>
            </p>
            <p>
              No personal information, no device identifiers, no IP logs, no analytics,
              and absolutely no behavioral tracking.
            </p>
            <ul className="docs-list">
              <li>No personal data</li>
              <li>No location data</li>
              <li>No usage statistics</li>
              <li>No API content is saved</li>
              <li>No background data collection</li>
            </ul>
            <p>
              The app doesn’t even have an internet backend. It literally cannot send
              information anywhere except to the API <em>you</em> choose.
            </p>
          </div>

          <div className="inner">
            <h2>How Your Data Is Stored</h2>
            <p>
              Flux Companion stores your request history, headers, and parameters
              <strong> only on your device</strong>. Local storage only, nothing leaves
              your phone.
            </p>
            <p>
              If you uninstall the app or clear its data, everything disappears instantly.
            </p>
          </div>

          <div className="inner">
            <h2>Your API Requests</h2>
            <p>
              Think of Flux Companion as a waiter. You enter your order (the API call),
              it delivers the request to the kitchen (the server), and brings the dish
              back.
            </p>
            <p>
              But the waiter has memory loss. It forgets everything immediately.
            </p>
            <p>
              Only <strong>the API you contact</strong> receives your request. If that
              service collects data, logs requests, or tracks analytics, that’s between
              <em> you</em> and <em>them</em>. Flux Companion is not involved.
            </p>
          </div>

          {/* SECTION 5 */}
          <div className="inner">
            <h2>No Third-Party Services</h2>
            <p>The app uses no external SDKs or trackers, including:</p>
            <ul className="docs-list">
              <li>Google Analytics</li>
              <li>Firebase</li>
              <li>Crashlytics</li>
              <li>AdMob or any ads platform</li>
              <li>Facebook SDK</li>
              <li>Telemetry / analytics services</li>
            </ul>
            <p>You get a clean, minimal, privacy-respecting utility.</p>
          </div>

          <div className="inner">
            <h2>Your Rights</h2>
            <p>
              Since Flux Companion stores <strong>no personal data</strong> whatsoever:
            </p>
            <ul className="docs-list">
              <li>There’s nothing to request</li>
              <li>Nothing to export</li>
              <li>Nothing to delete</li>
              <li>Nothing stored on a server</li>
            </ul>
            <p>
              Everything is local. You’re in complete control.
            </p>
          </div>

          <div className="inner">
            <h2>Questions?</h2>
            <p>
              If you ever have questions, ideas, or want to suggest improvements,
              feel free to reach out through the official Flux website’s feedback form.
            </p>
          </div>

        </div>
      </div>
    </>
  );
};

export default Privacy
