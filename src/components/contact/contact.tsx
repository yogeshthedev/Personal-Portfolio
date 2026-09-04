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
    <section id="contact" className="py-20 lg:py-[110px] pb-24 lg:pb-[140px] relative border-t border-[var(--border)]">
      <div className="container">
        <div className="grid grid-cols-1 min-[961px]:grid-cols-[1fr_1.25fr] gap-12 min-[961px]:gap-20 items-start">
          {/* Left Column: Bold Typographic Statement & Direct Context */}
          <div className="flex flex-col">
            <span className="label">04 // Contact</span>
            <h2 className="font-heading text-[clamp(38px,4.5vw,60px)] font-extrabold tracking-[-2px] leading-[1.05] text-white mt-3.5 mb-5">
              Let&apos;s build
              <br />
              something <em className="font-serif italic font-normal text-[var(--accent)]">great.</em>
            </h2>
            <p className="text-[15.5px] text-[var(--sub)] leading-[1.8] max-w-full min-[961px]:max-w-[440px] mb-6 min-[961px]:mb-9">
              Whether you have an open engineering role, a freelance project, or just want to chat tech,
              my inbox is always open.
            </p>

            <div className="flex flex-col gap-4 pt-6 border-t border-[var(--border)]">
              <a
                href="mailto:developeryogeshh@gmail.com"
                className="group inline-flex items-center gap-3 no-underline text-white font-mono text-[13px] transition-colors duration-200 hover:text-[var(--accent)]"
              >
                <span className="text-[var(--accent)] text-[15px] flex items-center"><FiMail /></span>
                <span>developeryogeshh@gmail.com</span>
                <FiArrowUpRight className="text-[13px] text-[var(--faint)] transition-all duration-200 group-hover:text-[var(--accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <div className="inline-flex items-center gap-3 font-mono text-xs text-[var(--faint)]">
                <span className="text-[var(--accent)] text-[15px] flex items-center"><FiClock /></span>
                <span>Typically replies within 24 hours</span>
              </div>

              <div className="inline-flex items-center gap-3 font-mono text-xs text-[var(--faint)]">
                <span className="text-[var(--accent)] text-[15px] flex items-center"><FiMapPin /></span>
                <span>Kota, Rajasthan, IN (UTC +05:30)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Seamless Underline Form (No Floating Box) */}
          <div className="pt-0 min-[961px]:pt-4">
            {status === 'success' ? (
              <div className="py-10 flex flex-col items-start gap-3">
                <div className="w-12 h-12 rounded-full bg-[#10b981]/10 border border-[#10b981]/30 flex items-center justify-center">
                  <IoCheckmarkCircleOutline className="text-[26px] text-[var(--status-green)]" />
                </div>
                <h3 className="font-heading text-[22px] font-bold text-white m-0">Message Received</h3>
                <p className="text-[14.5px] text-[var(--sub)] leading-[1.7] max-w-[460px] m-0">{feedbackMessage}</p>
                <button
                  type="button"
                  className="mt-3 bg-transparent border border-[var(--border-strong)] text-white px-[22px] py-2.5 rounded-[var(--r1)] font-mono text-xs cursor-pointer transition-all duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  onClick={() => setStatus('idle')}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="flex flex-col gap-7" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-7">
                  <div className="flex flex-col gap-2.5 relative">
                    <label htmlFor="name" className="font-mono text-[11px] tracking-[0.1em] uppercase text-[var(--sub)]">
                      Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Alex Morgan"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-0 border-b border-[var(--border-strong)] rounded-none pt-2.5 pb-3.5 font-heading text-[15px] text-white outline-none placeholder:text-[var(--faint)] placeholder:text-[14px] transition-colors duration-200 focus:border-b-[var(--accent)]"
                    />
                  </div>

                  <div className="flex flex-col gap-2.5 relative">
                    <label htmlFor="email" className="font-mono text-[11px] tracking-[0.1em] uppercase text-[var(--sub)]">
                      Your Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="alex@example.com"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-0 border-b border-[var(--border-strong)] rounded-none pt-2.5 pb-3.5 font-heading text-[15px] text-white outline-none placeholder:text-[var(--faint)] placeholder:text-[14px] transition-colors duration-200 focus:border-b-[var(--accent)]"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2.5 relative">
                  <label htmlFor="message" className="font-mono text-[11px] tracking-[0.1em] uppercase text-[var(--sub)]">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell me about your idea, timeline, or open role..."
                    value={formState.message}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-0 border-b border-[var(--border-strong)] rounded-none pt-2.5 pb-3.5 font-heading text-[15px] text-white outline-none placeholder:text-[var(--faint)] placeholder:text-[14px] transition-colors duration-200 focus:border-b-[var(--accent)] resize-y min-h-[100px] leading-relaxed"
                  />
                </div>

                {status === 'error' && (
                  <div className="font-mono text-xs text-red-400 py-2 border-b border-red-400/30">
                    {feedbackMessage}
                  </div>
                )}

                <div className="flex justify-start pt-2.5">
                  <button
                    type="submit"
                    className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white text-[#0a0a0a] border border-white px-8 py-3.5 rounded-[var(--r1)] font-heading text-[13px] font-semibold tracking-[0.04em] cursor-pointer transition-all duration-200 hover:not-disabled:bg-[var(--accent)] hover:not-disabled:border-[var(--accent)] hover:not-disabled:text-[#090b0e] hover:not-disabled:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={status === 'submitting'}
                  >
                    {status === 'submitting' ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <IoSendOutline className="text-[14px] transition-transform duration-200 group-hover:translate-x-1" />
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