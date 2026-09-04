import { useState, type FormEvent } from 'react'
import { IoSendOutline, IoCheckmarkCircleOutline } from 'react-icons/io5'
import { FiMail, FiMapPin, FiArrowUpRight, FiClock } from 'react-icons/fi'

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [feedbackMessage, setFeedbackMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setStatus('error')
      setFeedbackMessage('Please fill out all fields before sending.')
      return
    }

    setStatus('submitting')

    setTimeout(() => {
      setStatus('success')
      setFeedbackMessage('Thank you! Your message has been received. I will reply within 24 hours.')
      setFormState({ name: '', email: '', message: '' })
    }, 500)
  }

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-editorial-layout">
          {/* Left Column: Bold Typographic Statement & Direct Context */}
          <div className="contact-narrative-col">
            <span className="label">04 // Contact</span>
            <h2 className="contact-headline">
              Let&apos;s build
              <br />
              something <em>great.</em>
            </h2>
            <p className="contact-lead-text">
              Whether you have an open engineering role, a freelance project, or just want to chat tech,
              my inbox is always open.
            </p>

            <div className="contact-meta-lines">
              <a href="mailto:developeryogeshh@gmail.com" className="contact-email-link">
                <span className="meta-icon"><FiMail /></span>
                <span className="meta-text">developeryogeshh@gmail.com</span>
                <FiArrowUpRight className="meta-arrow" />
              </a>

              <div className="contact-meta-item">
                <span className="meta-icon"><FiClock /></span>
                <span className="meta-text">Typically replies within 24 hours</span>
              </div>

              <div className="contact-meta-item">
                <span className="meta-icon"><FiMapPin /></span>
                <span className="meta-text">Kota, Rajasthan, IN (UTC +05:30)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Seamless Underline Form (No Floating Box) */}
          <div className="contact-form-col">
            {status === 'success' ? (
              <div className="contact-success-state">
                <div className="success-icon-wrap">
                  <IoCheckmarkCircleOutline className="success-icon" />
                </div>
                <h3 className="success-title">Message Received</h3>
                <p className="success-desc">{feedbackMessage}</p>
                <button
                  type="button"
                  className="success-btn"
                  onClick={() => setStatus('idle')}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="contact-minimal-form" onSubmit={handleSubmit}>
                <div className="form-row-group">
                  <div className="form-line-field">
                    <label htmlFor="name" className="field-label">Your Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Alex Morgan"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="field-line-input"
                    />
                  </div>

                  <div className="form-line-field">
                    <label htmlFor="email" className="field-label">Your Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="alex@example.com"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="field-line-input"
                    />
                  </div>
                </div>

                <div className="form-line-field">
                  <label htmlFor="message" className="field-label">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell me about your idea, timeline, or open role..."
                    value={formState.message}
                    onChange={handleChange}
                    required
                    className="field-line-textarea"
                  />
                </div>

                {status === 'error' && (
                  <div className="form-error-banner">{feedbackMessage}</div>
                )}

                <div className="form-action-row">
                  <button
                    type="submit"
                    className="contact-send-btn"
                    disabled={status === 'submitting'}
                  >
                    {status === 'submitting' ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <IoSendOutline className="btn-icon-send" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}