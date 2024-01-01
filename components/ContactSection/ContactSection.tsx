'use client';

import { FormEvent, useState } from 'react';
import { Footer } from '..';
import { ADDRESS, emailAddress } from '../../shared/data';
import './ContactSection.styles.scss';
import { toast } from 'react-toastify';
import useContactForm from '@/hooks/useContactForm';
import { sendEmail } from '@/actions/email.action';

const ContactSection = () => {
  const {
    values: { email, name, message },
    handleChange,
    formReset,
  } = useContactForm();
  const [isLoading, setLoading] = useState(false);

  const handleSendEmail = async (e: FormEvent) => {
    e.preventDefault();

    if (!email || !name || !message) {
      alert('Please fill all fields');
      return;
    }
    setLoading(true);
    try {
      await sendEmail(email, name, message);
      formReset();
      toast.success('Email sent successfully!', {
        position: 'top-center',
      });
    } catch (e) {
      toast.error('Sent email failure!', {
        position: 'top-center',
      });
    }
    setLoading(false);
  };
  return (
    <section id="contact" className="contact-wrapper flex flex-col">
      <div className="overlay"></div>

      <div className="contact-section flex-1">
        <div className="wrapper">
          <div className="section-title">
            <h2>get in touch</h2>
          </div>

          <div className="contact-form-wrapper">
            <div className="address">
              <address>
                <span className="address-label animate-item">address :</span>
                <p className="address-content animate-item">{ADDRESS}</p>
                <span className="email-label animate-item">E-mail :</span>
                <a
                  href={`mailto:${emailAddress}`}
                  className="email animate-item"
                >
                  {emailAddress}
                </a>
              </address>
            </div>

            <div className="contact-form">
              <form onSubmit={handleSendEmail}>
                <div className="input-group name animate-item">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={name}
                    onChange={handleChange}
                  />
                </div>
                <div className="input-group email animate-item">
                  <label htmlFor="email">email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleChange}
                  />
                </div>
                <div className="input-group msg animate-item">
                  <label htmlFor="message">message *</label>
                  <textarea
                    id="message"
                    name="message"
                    cols={30}
                    rows={10}
                    placeholder="Write your message"
                    value={message}
                    onChange={handleChange}
                  />
                </div>
                <div className="input-group submit animate-item">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="disabled:opacity-80 cursor-not-allowed"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default ContactSection;
