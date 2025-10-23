import React from 'react'

const Feedback = () => {
  return (
    <div className="hero">
      <h1>Send Feedback</h1>

      <div className="outer">
        <div className="inner">
          <h2>We’d love to hear from you</h2>
          <p>
            Have a suggestion, question, or just want to share how you're using Flux? Let us know!
            Your feedback helps shape the future of the project.
          </p>

          <form 
            action="https://formsubmit.co/463474cae2412088ab4fb1e410e7dd09"
            method="POST"
            className="feedback-form">
            <input type="hidden" name="_next" value="https://flux.aarizish.in/thank-you" />
            <input type="hidden" name="_captcha" value="true" />
            <input type="text" name="_honey" className="honeypot" />

            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" rows="5" required></textarea>

            <button type="submit">Send Feedback</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Feedback
