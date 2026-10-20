
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

import {
  FaEnvelope,
  FaLocationDot,
  FaPhone
} from 'react-icons/fa6';

function Contact() {
  const form = useRef(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  const sendEmail = async (event) => {
    event.preventDefault();

    setLoading(true);
    setStatus('');

    try {
      await emailjs.sendForm(
        'service_foc5vns',
        'template_lal2mz2',
        form.current,
        {
          publicKey: 'ODQUvCJ7FC9UEXGSx',
        }
      );

      setStatus('success');
      form.current.reset();
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="contact">
      <section className="contact-content">
        <h2>Let's talk</h2>

        <div className="contact-columns">
          <div className="contact-left">
            <p className="contact-intro">
              We'd love to hear from you! Whether you have a question,
              need help with an order, or simply want to get in touch,
              we're here to help.
            </p>

            <div className="contact-details">
              <div className="contact-detail">
                <div className="contact-icon">
                  <FaLocationDot />
                </div>
                <div>
                  <h3>Location</h3>
                  <p>Lagos, Nigeria</p>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-icon">
                  <FaPhone />
                </div>
                <div>
                  <h3>Phone</h3>
                  <p>+234 705 442 5207</p>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-icon">
                  <FaEnvelope />
                </div>
                <div>
                  <h3>Email</h3>
                  <p>declutterwithsereveno@gmail.com</p>
                </div>
              </div>
            </div>

            <a
              className="get-location"
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get location
            </a>
          </div>

          <form
            className="contact-right"
            ref={form}
            onSubmit={sendEmail}
          >
            <div className="form-group">
              <label htmlFor="contact-name">Name</label>
              <input
                type="text"
                id="contact-name"
                name="user_name"
                placeholder="Full Name"
                autoComplete="name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-email">Email</label>
              <input
                type="email"
                id="contact-email"
                name="user_email"
                placeholder="Email Address"
                autoComplete="email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows="7"
                placeholder="Tell us what you need"
                required
              />
            </div>

            {status === 'success' && (
              <p role="status" aria-live="polite">
                Your message has been sent successfully!
              </p>
            )}

            {status === 'error' && (
              <p role="alert">
                Sorry, your message could not be sent. Please try again.
              </p>
            )}

            <button type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Contact;
