'use client'
import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault()
    alert('Message sent! (Connect to your backend to make this work)')
  }

  return (
    <section id="contact">
      <div className="container">
        <div className="label">Get In Touch</div>
        <div className="contact-grid">
          <div>
            <h2 className="contact-h">
              Let&apos;s build<br />something<br /><em>great.</em>
            </h2>
            <p className="contact-desc">
              Open to freelance and full-time web development opportunities.
              Frontend, backend, MongoDB — I&apos;ve got you covered.
            </p>
            <div className="ci-list">
              <div className="ci">
                <div className="ci-icon">✉</div>
                <div>
                  <div className="ci-lbl">Email</div>
                  <div className="ci-val">yogesh@example.com</div>
                </div>
              </div>
              <div className="ci">
                <div className="ci-icon">💼</div>
                <div>
                  <div className="ci-lbl">LinkedIn</div>
                  <div className="ci-val">/in/yogeshmeena</div>
                </div>
              </div>
              <div className="ci">
                <div className="ci-icon">🐙</div>
                <div>
                  <div className="ci-lbl">GitHub</div>
                  <div className="ci-val">@yogeshmeena</div>
                </div>
              </div>
            </div>
          </div>

          <div className="cform">
            <div className="fg">
              <label className="flbl">Your Name</label>
              <input
                type="text"
                className="finp"
                placeholder="John Doe"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
              />
            </div>
            <div className="fg">
              <label className="flbl">Email Address</label>
              <input
                type="email"
                className="finp"
                placeholder="john@example.com"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
              />
            </div>
            <div className="fg">
              <label className="flbl">Message</label>
              <textarea
                className="ftxt"
                rows={5}
                placeholder="Tell me about your project…"
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
              />
            </div>
            <button className="fsend" onClick={handleSubmit}>Send Message →</button>
          </div>
        </div>
      </div>
    </section>
  )
}
